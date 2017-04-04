/**
 * Created by pallavi_ on 03/04/2017.
 */
class Page {
    constructor() {
        this.title = 'Wallis Page';
    }
    open() {
        browser.url('/');
    }
}
module.exports = Page;