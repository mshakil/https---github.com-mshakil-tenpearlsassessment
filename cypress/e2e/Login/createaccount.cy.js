import CreateAccount from '../../page-objects/pages/createaccount'
import UserDashboard from '../../page-objects/pages/userdashboard'

// ISSUE OCCURRING WHILE CREATING NEW ACCOUNT.
// WEBSITE ISSUE
describe('Verify Creation of NEW ACCOUNT',() =>{
    
    before(function(){
        cy.fixture('testdata').then(webUrl => {
            const url = webUrl.baseUrl;
            cy.visit(url);            
        })
    })

    it('Should Create new account successfully',() =>{
        //  CLICK ON SIGN IN BUTTON
        CreateAccount.clickSignIn();
        
        cy.fixture('testdata').then(createUserInfo=>{
            const gender = createUserInfo.userInfo.gender;
            const firstName = createUserInfo.userInfo.customerFirstName;
            const lastName = createUserInfo.userInfo.customerLastName;
            const email = createUserInfo.userInfo.customerEmail;
            const password = createUserInfo.userInfo.customerPassword;
            const birthDate = createUserInfo.userInfo.DOB.date;
            const birthMonth = createUserInfo.userInfo.DOB.month;
            const birthYear = createUserInfo.userInfo.DOB.year;
            const company = createUserInfo.userInfo.company;
            const address = createUserInfo.userInfo.address;
            const city = createUserInfo.userInfo.city;
            const state = createUserInfo.userInfo.state;
            const zipcode = createUserInfo.userInfo.zipCode;
            const mobile = createUserInfo.userInfo.mobilePhone;
            const aliasAddress = createUserInfo.userInfo.aliasAddress;
            const successMessage = createUserInfo.userInfo.successAccountMessage;

            //  ENTER EMAIL ADDRESS AND CLICK CREATE BUTTON 
            CreateAccount.enterMailForCreateAccount(email);
            CreateAccount.clickRegisterButton();
          
            //  FILL USER CREATION FORM
            CreateAccount.selectGender(gender);
            CreateAccount.enterCustomerFirstName(firstName);
            CreateAccount.enterCustomerLastName(lastName);

            CreateAccount.enterPassword(password);
            CreateAccount.selectDateOfBirth(birthDate,birthMonth,birthYear);
            CreateAccount.enterFirstName(firstName);

            CreateAccount.enterLastName(lastName);
            CreateAccount.enterCompanyName(company);
            CreateAccount.enterAddress(address);

            CreateAccount.enterCity(city);
            CreateAccount.enterState(state);
            CreateAccount.EnterpostCode(zipcode);

            CreateAccount.enterPhoneNumber(mobile);
            CreateAccount.enterAliasAddress(aliasAddress);

            CreateAccount.clickCreateAccount();

            UserDashboard.verifyNewAccountIsCreatedSuccessfull(firstName+" "+lastName);
        })
    })
})


