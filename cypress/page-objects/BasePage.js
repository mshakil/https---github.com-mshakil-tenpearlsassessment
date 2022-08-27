export default class BasePage{
    static pause(ms){
        cy.wait(ms);
    }

    static logInfo(message){
        cy.log(message);
    }

    static verifyValidationErrorMessage(errorMessage){
        //cy.get("//div[contains(@class,'wt-validation__message')][not(contains(@class,'--is-hidden'))]").should('have.text'.message);

        cy.get('div.wt-validation__message').filter(':visible').should('have.text',errorMessage);
    }
}