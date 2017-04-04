var productpage = require('../pageobjects/productpage');
var assert= require('assert');
describe('Going on category  product page', function () {
    it('it should click on the Dresses product from homepage',function () {
        productpage.open();
        browser.timeouts('page load', 10000);
        productpage.category.click();
        browser.timeouts('page load', 10000);

        productpage.category.click();
        var modname = browser.getElementsByName('View All Dresses');
assert.equal(modname,'View All Dresses');
    });

    it('Clicking on filter on category page', function () {
        productpage.Filter.isPresent();
        productpage.function.click();
        productpage.Colur.click();
        expect(productpage.Verification.getText()).to.contain('Black Dresses');
    });
});