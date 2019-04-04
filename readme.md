#### Installation
Run the following to download and install dependencies:
`git clone https://github.com/BillyNoGoat/twitter-follow-puppeteer`
`cd twitter-follow-puppeteer`
`npm i`

#### Config
Edit the file `config.js` with your twitter login details and provide a list of twitter URL's as an array in `urls`.
**maxConcurrency** defines how many concurrent sessions will run when following. Unless the follow list is huge, stick with `1` to process them one at a time.
More information can be found in the dependency, [puppeteer-cluster](https://github.com/thomasdondorf/puppeteer-cluster#clusterlaunchoptions).

#### Running
Use command `node app.js` to start the app.
