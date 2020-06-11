 
 const action = require('../pages/action'); 
 class Page{

  get headerLogo(){ return $("header-logo")}
  get searchForm(){ return $("header-search-form")}
  get searchTextBox() { return $("yfin-usr-qry")}
  get searchBtn() { return $("header-desktop-search-button")}
  get signInBtn() { return $("header-signin-link")}
  get quoteLookup() {return $('[data-test="add-symbol-overlay"]')}
  get quoteLookuptext() {return $('[data-test="add-symbol-overlay"] input[type="text"]')}
  

  isHeaderLogoExists() {
    const isDiplayed = action.elementDisplayed(headerLogo);
    expect(isDiplayed).to.be.true;
  }
}
module.exports = new Page()