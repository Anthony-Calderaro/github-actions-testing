// Requires mocha
// var webdriver = require('selenium-webdriver');
var assert = require('assert');
/* Change the username and accessKey to your Saucelabs.com credentials */
let username = "acalderaro",
accessKey = "47147dfa-e629-46cc-822a-9c8210db58cc",
baseUrl = "https://www.saucedemo.com", // Base URL sets the target test application
driver; // driver instantiates via callback

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.notEqual('a', 'b');
    });
  });
});

// /* Describe is a way to group your tests together and set test suite parameters */
// describe('Instant Sauce Test Module 1', function () {
// // this.timeout(10000);
//   /* it represents an actual test, the parameters are the title of the test case */
//   it('should-open-safari', async function (done) {
//     /* Instantiate a WebDriver and set browser capabilities */
//     driver = await new webdriver.Builder().withCapabilities({
//       'browserName': 'safari',
//       'platform': 'macOS 10.13',
//       'version': '11.1',
//       /* Pass Sauce User Name and Access Key */
//       'username': 'acalderaro',
//       'accessKey': '47147dfa-e629-46cc-822a-9c8210db58cc',
//       'name': this.test.title,
//     }).usingServer("https://" + username + ":" + accessKey +
//       "@ondemand.us-west-1.saucelabs.com:443/wd/hub").build();
//     /* The driver navigates to the target application, stored in this variable baseUrl*/
//     await driver.get(baseUrl);
//     /* The driver grabs the title of the web page and displays it in your console */
//     const title = await driver.getTitle().then(function (title) {
//       console.log("title is: " + title);
//       assert.notEqual(title, '');
//     });
//     console.log(title);
//     driver.quit();
//     done();
//     /* This tears down the current WebDriver session and ends the test method*/
//   });
// });
