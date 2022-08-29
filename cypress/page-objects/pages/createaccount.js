import BasePage from "../BasePage";

export default class CreateAccount extends BasePage{
    static clickSignIn(){
        cy.get("div.header_user_info a.login").click();
    }

    static clickRegisterButton(){
        cy.get("button#SubmitCreate").click();
    }

    static enterMailForCreateAccount(mailAddress){
        cy.get("input#email_create").clear().type(mailAddress);
    }

    static selectGender(genderVal){
        cy.get("input[name='id_gender']").check(genderVal);
    }

    static enterCustomerFirstName(firstName){
        cy.get("input[id='customer_firstname']").clear().type(firstName);
        BasePage.pause(500);
    }

    static enterCustomerLastName(lastName){
        cy.get("input[id='customer_lastname']").clear().type(lastName);
        BasePage.pause(500);
    }

    static enterPassword(password){
        cy.get("input#passwd").clear().type(password);
        BasePage.pause(500);
    }

    static selectDateOfBirth(date,month,year){
        cy.get("select#days").select(date);
        cy.get("select#months").select(month);
        cy.get("select#years").select(year);
        BasePage.pause(500);
    }

    static enterFirstName(firstName){
        cy.get("input#firstname").clear().type(firstName);
        BasePage.pause(500);
    }

    static enterLastName(lastName){
        cy.get("input#lastname").clear().type(lastName);
        BasePage.pause(500);
    }

    static enterCompanyName(company){
        cy.get("input#company").clear().type(company);
        BasePage.pause(500);
    }

    static enterAddress(address){
        cy.get("input#address1").clear().type(address);
        BasePage.pause(500);
    }

    static enterCity(city){
        cy.get("input#city").clear().type(city);
        BasePage.pause(500);
    }

    static enterState(state){
        cy.get("select#id_state").select(state);
        BasePage.pause(500);
    }

    static EnterpostCode(postal){
        cy.get("input#postcode").clear().type(postal);
        BasePage.pause(500);
    }

    static enterPhoneNumber(phoneNum){
        cy.get("input#phone_mobile").clear().type(phoneNum);
        BasePage.pause(500);
    }
    
    static enterAliasAddress(alias){
        cy.get("input#alias").clear().type(alias);
        BasePage.pause(500);
    }

    static clickCreateAccount(){
        cy.get("button#submitAccount").click();
        BasePage.pause(500);
    }

    static verifyNewAccountIsCreatedSuccessfull(costumerName){
        cy.get("div.header_user_info span").then($elem =>{
            expect($elem.text().trim()).to.contains(costumerName);
        })
    }    
}