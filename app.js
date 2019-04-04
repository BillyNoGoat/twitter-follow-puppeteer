// const puppeteer = require("puppeteer");
const { Cluster } = require("puppeteer-cluster");
const config = require("./config");

const { username, password } = config;

async function run() {
  const cluster = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_PAGE,
    maxConcurrency: config.maxConcurrency,
    puppeteerOptions: {
      headless: true,
      userDataDir: "./user_data"
    },
    monitor: true
  });

  await cluster.task(async ({ page, data: url }) => {
    await page.goto(url);

    //If not logged in, log in
    if (!(await isLoggedIn(page))) {
      console.log("Not logged in, logging in...");
      await loginToPage(page);
      console.log("Logged in");
    }
    console.log("Checking if following...");

    //Get classes of follow button as array
    const classes = await selectorToClassArray(
      page,
      ".ProfileNav-item div.user-actions:first-child"
    );

    const followStatus = classes.find(
      c => c == "following" || c == "not-following"
    );

    // Ensure we can read the follow button
    if (!followStatus) {
      throw new Error("Unable to determine follow status.");
    }

    if (followStatus == "not-following") await followUser(page);
    if (followStatus == "following") return console.log("Already followed!");
  });

  for (url of config.urls) {
    await cluster.queue(url);
  }

  cluster.on("taskerror", (err, data) => {
    console.log(`Error: ${data}: ${err.message}`);
  });

  await cluster.idle();
  await cluster.close();
}

run();

// Returns true if currently logged in, otherwise false
async function isLoggedIn(page) {
  const loggedInIdentifier = await page.waitFor(() => {
    return (
      document.querySelector("#signin-link") ||
      document.querySelector("#user-dropdown-toggle")
    );
  }, {});
  const loginHandle = await loggedInIdentifier.getProperty("href");
  const currentHref = await loginHandle.jsonValue();
  return currentHref == "https://twitter.com/settings";
}

async function loginToPage(page) {
  await page.waitForSelector("#session> li > a");
  await page.click("#session> li > a");
  // Below is a slightly slower but simple way
  //   await page.type(".LoginForm > .LoginForm-username > .text-input", username);
  //   await page.type(".LoginForm > .LoginForm-password > .text-input", username);
  await page.evaluate(
    (user, pass) => {
      document.querySelector(
        ".LoginForm > .LoginForm-username > .text-input"
      ).value = user;
      document.querySelector(
        ".LoginForm > .LoginForm-password > .text-input"
      ).value = pass;
    },
    username,
    password
  );
  // await page.click('#signin-dropdown input[type="submit"]');
  await page.evaluate(
    'document.querySelector("#signin-dropdown > div.signin-dialog-body > form > input.EdgeButton.EdgeButton--primary.EdgeButton--medium.submit.js-submit").click();'
  );
  return await page.waitForSelector("#user-dropdown-toggle");
}

async function followUser(page) {
  await page.click(
    ".ProfileNav-item div.user-actions:first-child span.follow-button"
  );
  await page.waitForSelector(
    ".ProfileNav-item div.user-actions:first-child.following"
  );
  console.log("User followed!");
}

//Takes page object and CSS selector and returns the classes on the object as an
//array of strings.
async function selectorToClassArray(page, selector) {
  return await page
    .$(selector)
    .then(el => el.getProperty("className")) // Returns a jsHandle of that property
    .then(cn => cn.jsonValue()) // This converts the className jsHandle to a space delimitedstring
    .then(classNameString => classNameString.split(" ")) // Splits into array
    .then(x => x);
}
