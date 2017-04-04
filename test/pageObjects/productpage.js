var Page = require('./page');
var assert= require('assert');

var homepage1 = Object.create(Page, {
    /**
     * define elements
     */
    category: { get: function () { browser.element('#Dresses'); } },
    Filter: { get: function () { return browser.getElementsByClassName('filter_group_label'); } },
    Criteria:     { get: function () { return browser.element('#Colour'); } },
    Colur:    { get: function () { return browser.element('#black'); } },
    Verification: { get: function (){return browser.element('#Black Dresses')}},


    loadpage :{value: function(){browser.timeouts('script', 60000);
        browser.executeAsync(function (done) {
            console.log('this should not fail');
            setTimeout(done, 59000);
        });}
    },
/**
 * define or overwrite page methods
 */
    open: { value: function() {
        browser.url('/');
    //HTMLDocument document =(HTMLDocument)browser.getHTMLdocument();
        console.log('I am going crazy');


         var title = browser.getTitle();
       assert.equal(title,"Wallis - Women's Clothing | Dresses, Coats, Tops & Petite");
    }}
});

module.exports = homepage1