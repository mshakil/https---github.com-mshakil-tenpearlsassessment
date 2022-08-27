export default class BasePage{
    static pause(ms){
        cy.wait(ms);
    }

    static logInfo(message){
        cy.log(message);
    }

    static verifyValidationErrorMessage(errorMessage){
        cy.get("div[class*='wt-validation__message']:not([class*='--is-hidden'])").should('have.text',errorMessage);
    }
}