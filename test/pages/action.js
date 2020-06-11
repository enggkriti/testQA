class action{


elementDisplayed(element){

    element.waitforDisplayed()
    return element.isDisplayed()

}



}
module.exports = new action()