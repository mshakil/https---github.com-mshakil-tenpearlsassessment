
import CreateAccount from '../../page-objects/pages/createaccount'
import ProductDashboard from '../../page-objects/pages/productdashboard'


describe('Verify Required Fields Of Create Account',() =>{
    
    before(function(){
        cy.fixture('testdata').then(webUrl => {
            const url = webUrl.baseUrl;
            cy.visit(url);
        })
        
        CreateAccount.clickSignIn();
        CreateAccount.clickRegisterButton();
    })

    it('Should verify that Register Button Is Disable When All Fields Are Empty',() =>{
        CreateAccount.verifyInputFieldIsEmpty("All")
        CreateAccount.logInfo("Verifying that all input fields are empty");

        CreateAccount.verifyRegisterButtonIsDisabled();
        CreateAccount.logInfo("Verifying that Register button is disable.");
    })

    it('Should verify that Register Button Is Enable When All Fields Are Not Empty',() =>{

        cy.fixture('testdata').then(userData => {
            const email = userData.new_Email;
            const name = userData.new_UserName;
            const password = userData.new_Password;
            
            CreateAccount.enterEmail(email);
            CreateAccount.enterFirstName(name);
            CreateAccount.enterPassword(password);
            CreateAccount.verifyRegistrationButtonIsEnabled();
        })
    })
})

describe('Create Account On Etsy',() =>{
    
    it('Should Create Account On Etsy Successfully!', () =>{
        CreateAccount.clickCreateAccountButton();

        cy.fixture('testdata').then(userData => {
            const name = userData.new_UserName;
            ProductDashboard.VerifyAccountCreatedSuccessfully(name);
        })
    })
})

