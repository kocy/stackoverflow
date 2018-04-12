var jasmineReporters = require('jasmine-reporters'),
    HTMLReporter = require('protractor-html-reporter-2');

exports.config = {

    directConnect: true,

    specs: [
        './spec.js'
    ],

    onPrepare: function(){
        browser.ignoreSynchronization = true;

        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: './build/test/results',
            filePrefix: 'e2e-results'
        }));
    },

    onComplete: function() {
        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();
        var datetime = '20180412_1610';

        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            platform = caps.get('platform');
            var HTMLReport = require('protractor-html-reporter-2');

            testConfig = {
                reportTitle: 'E2E Test Summary Report',
                outputPath: './build/test/results/E2E_Test_Summary_Report',
                outputFilename: 'e2e_TestResult_'+datetime,
                screenshotPath: './build/test/results/E2E_Test_Summary_Report/screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: true,
                screenshotsOnlyOnFailure: true,
                browserPrefix: true
            };
            new HTMLReport().from('./build/test/results/e2e-results.xml', testConfig);
        }).then(function(){
            console.log('generate html report complete');
            zipE2EReport();
        });
    }

};

function zipE2EReport() {
    var fs = require('fs');
    var archiver = require('archiver');
    
    // create a file to stream archive data to.
    var output = fs.createWriteStream('build/test/results/E2E_Test_Summary_Report.zip');
    var archive = archiver('zip');

    output.on('close', function() {
        console.log(archive.pointer() + ' total bytes');
        console.log('archiver has been finalized and the output file descriptor has closed.');
    });
    
    output.on('end', function() {
        console.log('Data has been drained');
    });
    
    // good practice to catch this error explicitly
    archive.on('error', function(err) {
        console.log('compress failed: ' + err);
        throw err;
    });
 
    // pipe archive data to the file
    archive.pipe(output);

    archive.directory('build/test/results/E2E_Test_Summary_Report', 'E2E_Test_Summary_Report');

    archive.finalize();
}