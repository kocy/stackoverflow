var {
    Given,
    Then,
    When
} = require("cucumber");

Given(/^open cucumberjs github page$/, function() {
    browser.get("https://www.npmjs.com");

    element(by.css('#what-is-npm-install-npm')).click();


    return browser.sleep(2000);
});