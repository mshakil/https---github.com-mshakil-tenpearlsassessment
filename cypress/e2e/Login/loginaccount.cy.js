import {url} from '../../../config';
import BasePage from '../../page-objects/BasePage';
import CreateAccount from '../../page-objects/pages/createaccount'

describe("Verify Failed Login Functionality", ()=> {

    beforeEach(function(){
        cy.visit(url);
        CreateAccount.clickSignIn();
    })
    it("Should Show Validation Error Message that Email Field Can't Be Empty", ()=>{

        cy.fixture('testdata').then(dataset =>{
            const pwd = dataset.password_1;
            const validationMsg = dataset.emailFieldEmptyMessage;

            CreateAccount.enterPassword(pwd);
            CreateAccount.clickLoginButton();

            BasePage.verifyValidationErrorMessage(validationMsg);
        });
    })

    it("Should Show Validation Error Message that Password Is Incorrect", ()=>{

        cy.fixture('testdata').then(dataset =>{
            const userName = dataset.email_1;
            const pwd = dataset.password_1;
            const validationMsg = dataset.incorrectPassword;

            CreateAccount.enterEmail(userName);
            CreateAccount.enterPassword(pwd);
            CreateAccount.clickLoginButton();

            BasePage.verifyValidationErrorMessage(validationMsg);
        });
    })

})