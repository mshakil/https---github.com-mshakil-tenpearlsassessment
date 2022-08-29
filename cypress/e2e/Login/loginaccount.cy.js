import CreateAccount from '../../page-objects/pages/createaccount'
import UserDashboard from '../../page-objects/pages/userdashboard'
import LoginPage from '../../page-objects/pages/loginaccount'

describe('Verify Login To Website Is Successfull',() =>{
    before(function(){
        cy.fixture('testdata').then(webUrl => {
            const url = webUrl.baseUrl;
            cy.visit(url);            
        })
    })

    it("Should Login to Application Successfully",()=>{
        //  CLICK ON SIGN IN BUTTON
        CreateAccount.clickSignIn();

        cy.fixture('testdata').then(createUserInfo=>{
            const email = createUserInfo.userInfo.customerEmail;
            const password = createUserInfo.userInfo.customerPassword;
            const firstName = createUserInfo.userInfo.customerFirstName;
            const lastName = createUserInfo.userInfo.customerLastName;

            LoginPage.enterEmail(email);
            LoginPage.enterPassword(password);
            LoginPage.clickLoginButton();

            UserDashboard.verifyNewAccountIsCreatedSuccessfull(firstName+" "+lastName)
        })
    })


})