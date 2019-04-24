#### BIGGER AND BETTER NOTE THAN THE NOTE BELOW:
OK twitter changed their UI and therefore this won't work (:

#### NOTE:
This project is not intended as an ideal solution. It's just a script I wrote in a matter of minutes as I was too lazy to open 60+ infosec resercher's twitter handles and follow them one by one and as it's a one-time script I didn't write it "properly". Puppeteer is suitable to write a quick script that works one time and that's it.

It doesn't handle things properly, it's likely to break as soon as twitter do any sort of UI update and it's slow :).

#### Installation
Run the following to download and install dependencies:
`git clone https://github.com/BillyNoGoat/twitter-follow-puppeteer.git`
`cd twitter-follow-puppeteer`
`npm i`

#### Config
Edit the file `config.js` with your twitter login details and provide a list of twitter URL's as an array in `urls`.
**maxConcurrency** defines how many concurrent sessions will run when following. Unless the follow list is huge, stick with `1` to process them one at a time.
More information can be found in the dependency, [puppeteer-cluster](https://github.com/thomasdondorf/puppeteer-cluster#clusterlaunchoptions).

#### Running
Use command `node app.js` to start the app.

#### Handles
If you can't figure out your own sources to follow I suggest the following list scraped from https://trust.salesforce.com/en/security/thank-you/ using `document.querySelector`. 

```javascript
 urls: [
    "https://twitter.com/Rockcena5",
    "https://twitter.com/securezi?lang=en",
    "https://twitter.com/_ruby",
    "https://twitter.com/4lemon",
    "https://twitter.com/arneswinnen",
    "https://twitter.com/guicl",
    "https://twitter.com/spetr0x",
    "https://twitter.com/hussain_0x3c",
    "https://www.twitter.com/yaworsk",
    "https://twitter.com/@corb3nik",
    "https://twitter.com/missoum1307",
    "https://twitter.com/dz_samir",
    "https://twitter.com/h1_sp1d3r",
    "https://twitter.com/karlaparece",
    "https://twitter.com/hazimaslam",
    "https://twitter.com/FishOfPrey",
    "https://twitter.com/plmaltais",
    "https://twitter.com/black2fan",
    "https://twitter.com/deepankerchawla/",
    "https://twitter.com/coderahsan",
    "https://twitter.com/KHIZER_JAVED47",
    "https://twitter.com/inhibitor181",
    "https://twitter.com/Ro0t_Hassh",
    "https://twitter.com/vis_hacker",
    "https://twitter.com/AnsariOsama10",
    "https://twitter.com/1lastBr3ath",
    "https://twitter.com/redshark1802",
    "https://twitter.com/Rockcena5",
    "http://twitter.com/tomikoski",
    "https://www.twitter.com/ashish_padelkar",
    "https://twitter.com/stankoja",
    "https://twitter.com/jensvoid",
    "https://twitter.com/secuninja",
    "https://twitter.com/secureZi",
    "https://twitter.com/dz_samir",
    "https://twitter.com/yaworsk",
    "https://twitter.com/Abdulhaqkhokhar",
    "https://twitter.com/Abdul_R3hman",
    "https://twitter.com/niksthehacker",
    "https://twitter.com/esevece",
    "https://twitter.com/sasi2103",
    "https://twitter.com/domainplus",
    "https://twitter.com/killr0x33d",
    "https://twitter.com/satishb3",
    "https://twitter.com/iwasakinoriaki",
    "https://twitter.com/jayaradhashyam",
    "https://twitter.com/Dor3s",
    "https://twitter.com/issam_rabhi",
    "https://twitter.com/vathsa_bhat",
    "https://twitter.com/Abdulahhusam",
    "https://twitter.com/psych0tr1a",
    "https://twitter.com/strukt93",
    "https://twitter.com/lucio_89",
    "https://twitter.com/securityshell",
    "https://twitter.com/avlidienbrunn",
    "https://twitter.com/donrookie",
    "https://twitter.com/QuisterTow",
    "https://twitter.com/akkilion_",
    "https://twitter.com/MrHack1999",
    "https://twitter.com/zargaryasir",
    "https://twitter.com/Agarri_FR",
    "https://twitter.com/jigarthakkar39",
    "https://twitter.com/aboul3la"
  ]
  ```
