import BasePage from "../BasePage";

export default class CreateAccount extends BasePage{
    static clickSignIn(){
        cy.get("button.select-signin").click();
    }

    static clickRegisterButton(){
        cy.get("button.select-register").click();
    }

    static enterEmail(mailAddress){
        cy.get("input[id='join_neu_email_field']").clear().type(mailAddress);
    }

    static enterFirstName(firstName){
        cy.get("input[id='join_neu_first_name_field']").clear().type(firstName);
    }

    static enterPassword(password){
        cy.get("input[id='join_neu_password_field']").clear().type(password);
    }

    static clickCreateAccountButton(){
        cy.get("button[value='register']").click();
        
        this.pause(5000);
        this.logInfo("Adding wait for navigation");
    }

    static clickLoginButton(){
        cy.get("button[value='sign-in']").click();
        BasePage.pause(3000);
    }

    static closeCreateAccountDialog(){
        cy.get("span[aria-label='Close']").click();
    }

   
    static verifyInputFieldIsEmpty(fieldName)
    {
        
        switch(fieldName){
            case "email":
                cy.isEmpty("input[id='join_neu_email_field']");
                break;

            case "firstname":
                cy.isEmpty("input[id='join_neu_first_name_field']");
                break;
            case "password":
                cy.isEmpty("input[id='join_neu_password_field']");
                break;
            default:{
                cy.isEmpty("input[id='join_neu_email_field']");
                cy.isEmpty("input[id='join_neu_first_name_field']");
                cy.isEmpty("input[id='join_neu_password_field']");
            }
            break;
        }
    }

    

    static verifyRegisterButtonIsDisabled(){
        cy.isDisable("button[value='register']")
    }

    static verifyRegistrationButtonIsEnabled(){
        cy.isEnable("button[value='register']")
    }

    static getErrorMessage
}