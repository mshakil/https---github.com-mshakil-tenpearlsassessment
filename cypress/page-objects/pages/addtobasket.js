import BasePage from "../BasePage";
export default class AddToBasket extends BasePage{

    static selectVariation(selectOption){
        cy.get('#variation-selector-0').scrollIntoView().select(selectOption);
    }

    static enterPersonalization(personalizeMessage){
        cy.get('#listing-page-personalization-textarea').scrollIntoView().clear().type(personalizeMessage);
    }

    static clickAddToBasketButton(){
        cy.get("div[data-selector='add-to-cart-button'] button").scrollIntoView().click();
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
            expect($elem2.text().trim()).to.contains(expectedMessage);
        })
    }
}