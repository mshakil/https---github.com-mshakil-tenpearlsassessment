import BasePage from "../BasePage";

export default class UserDashboard extends BasePage{
    static verifyNewAccountIsCreatedSuccessfull(costumerName){
        cy.get("div.header_user_info span").then($elem =>{
            expect($elem.text().trim()).to.contains(costumerName);
        })
    }
}