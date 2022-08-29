import BasePage from '../../page-objects/BasePage';
import CreateAccount from '../../page-objects/pages/createaccount'
import LoginPage from '../../page-objects/pages/loginaccount'

describe("Verify Failed Login Functionality", ()=> {

    beforeEach(function(){
        cy.fixture('testdata').then(webUrl => {
            const url = webUrl.baseUrl;
            cy.visit(url);            
            CreateAccount.clickSignIn();
        })
    })

    it("Should Show Validation Error Message that Email Field Can't Be Empty", ()=>{

        cy.fixture('testdata').then(dataset =>{
            const password = dataset.userInfo.customerPassword;;
            const validationMsg = dataset.emailFieldEmptyMessage;

            LoginPage.enterPassword(password);
            LoginPage.clickLoginButton();

            BasePage.verifyValidationErrorMessage(validationMsg);
        });
    })

    it("Should Show Validation Error Message that Password Is Incorrect", ()=>{

        cy.fixture('testdata').then(dataset =>{
            const email = dataset.userInfo.customerEmail;
            const pwd = dataset.wrongPassword;
            const validationMsg = dataset.incorrectPassword;

            LoginPage.enterEmail(email);
            LoginPage.enterPassword(pwd);
            LoginPage.clickLoginButton();

            BasePage.verifyValidationErrorMessage(validationMsg);
        });
    })
})