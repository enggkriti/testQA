 
 const action = require('../pages/action'); 
 class Page{

  get headerLogo(){ return $('#header-logo')}
  get searchBox(){ return $("header-search-form")}
  get searchTextBox() { return $("yfin-usr-qry")}
  get searchBtn() { return $("header-desktop-search-button")}
  get signInBtn() { return $("header-signin-link")}
  
  isHeaderLogoExists() {
    const isDiplayed = action.elementDisplayed(headerLogo);
    expect(isDiplayed).to.be.true;
  }
    
  isSearchboxExists(){
      const searchbox = action.elementDisplayed(searchBox);
      expect(searchbox).to.be.true
  }

  setSearchValue(value){
       action.doSetValue(searchTextBox,value)
  }

  clickSearchbuttom(){
      action.doClick(searchBtn);
  }

  }



module.exports = new Page()