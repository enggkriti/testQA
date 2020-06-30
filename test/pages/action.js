class action{


elementDisplayed(element){

    element.waitforDisplayed()
    return element.isDisplayed()

}

doClick(element){
    element.waitforDisplayed()
    element.click()

}

doSetValue(element,value){
    element.waitforDisplayed()
    element.setValue(value)
    
}
}
module.exports = new action()