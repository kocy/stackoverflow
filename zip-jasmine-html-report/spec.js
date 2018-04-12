
describe('test zip html report from jasmine xml report', function(){

    it('test case', function(){

        browser.get('https://www.npmjs.com');

        element(by.css('input[name="q"]')).sendKeys('test');
    });
    
});