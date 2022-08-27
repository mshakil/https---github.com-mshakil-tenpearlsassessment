import BasePage from "../BasePage";
export default class AddToBasket extends BasePage{

    static selectVariation(selectOption){
        cy.get("body").then($body => {
            if ($body.find("#variation-selector-0").filter(':visible').length > 0) {   
                //evaluates as true
                cy.get('#variation-selector-0').scrollIntoView().select(selectOption);
            }
            else{
                BasePage.logInfo("VARIATION SELECTION NOT AVAILABLE")
            }
        });

        
    }

    static enterPersonalization(personalizeMessage){
        
        cy.get("body").then($body => {
            if ($body.find("#listing-page-personalization-textarea").filter(':visible').length > 0) {   
                //evaluates as true
                cy.get('#listing-page-personalization-textarea').scrollIntoView().clear().type(personalizeMessage);
            }
            else{
                BasePage.logInfo("PERSONALISATION OPTION NOT AVAILABLE")
            }
        });
    }

    static clickAddToBasketButton(){
        BasePage.pause(1000);
        cy.get("div[data-selector='add-to-cart-button'] button").scrollIntoView().click({force:true});
    }

    static verifyProductIsAddedSuccessfully(noOfItem){
        BasePage.pause(2000);
        cy.get('h1.wt-text-heading-01').then(function($elem){
            const expectedMessage = noOfItem +" item in your basket";
            BasePage.logInfo(expectedMessage);
            expect($elem.text().trim()).to.contains(expectedMessage);
        })
    }

    static clickRemoveProductFromBasket(){
        cy.get("a[aria-label='Remove listing']").click();
    }

    static verifyBasketIsEmpty(){
        BasePage.pause(2000);
        cy.get('h1.wt-text-heading-01').filter(':visible').then(function($elem2){
            const expectedMessage = "Your basket is empty.";
            BasePage.logInfo(expectedMessage);
            expect(expectedMessage).to.contains($elem2.text().trim());
        })
    }
}