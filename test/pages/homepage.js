const page = require('../pages/page');
const action = require('../pages/action'); 
 class HomePage{

  
  get quoteLookup() {return $('[data-test="add-symbol-overlay"]')}
  get quoteLookuptext() {return $('[data-test="add-symbol-overlay"] input[type="text"]')}
  get quoteLookupbtn() {return $('')}

  isQuoteLookupExists() {
    const isDiplayed = action.elementDisplayed(this.quoteLookup);
    expect(isDiplayed).to.be.true;
  }

  setQuoteLookupValue(value){
       action.doSetValue(quoteLookuptext,value)
  }

  clickSearchbuttom(){
      action.doClick(searchBtn);
  }

  }



module.exports = new Page()