var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

exports.config = {

    seleniumAddress: "http://localhost:4444/wd/hub",
    
    capabilities: {
        browserName: "chrome",
        chromeOptions: {
            useAutomationExtension: false
        }
    },

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: ["features/**/*feature"],

    cucumberOpts: {
        // strict: true,
        require: [
            "supports/*.js",
            "steps/**/*step.js"
        ],
        tags: false,
        format: 'json:./reports/cucumber.json',
        profile: false,
        ignoreUncaughtExceptions: true,
        'no-source': true
    },

    onPrepare: function() {
        global.expect = chai.expect;

        browser.ignoreSynchronization = true;
    }
};
