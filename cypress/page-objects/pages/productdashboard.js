import BasePage from "../BasePage";

export default class ProductDashboard extends BasePage{
    static VerifyAccountCreatedSuccessfully(userName){
        cy.get('h1.welcome-message-text').should('contain.text',userName);
    }
    
}