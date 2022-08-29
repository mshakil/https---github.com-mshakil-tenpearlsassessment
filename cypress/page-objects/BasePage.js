export default class BasePage{
    static pause(ms){
        cy.wait(ms);
    }

    static waitUntil(selector){
        cy.wait()
    }

    static logInfo(message){
        cy.log(message);
    }

    static verifyValidationErrorMessage(errorMessage){
        cy.get("div.alert-danger li").should('have.text',errorMessage);
    }
}