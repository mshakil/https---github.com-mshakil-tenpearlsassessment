import BasePage from "../BasePage";
export default class Login extends BasePage{

    static enterEmail(email){
        cy.get("input[id='email']").clear().type(email);
    }

    static enterPassword(password){
        cy.get("input[id='passwd']").clear().type(password);
    }

    static clickLoginButton(){
        cy.get("button[id='SubmitLogin']").click();
    }
}