import {url} from '../../config';
import {new_Email} from '../../config';
import {new_UserName} from '../../config';
import { new_Password } from '../../config';

import CreateAccount from '../page-objects/pages/createaccount'
import ProductDashboard from '../page-objects/pages/productdashboard'


describe('Verify Required Fields Of Create Account',() =>{
    
    before(function(){
        CreateAccount.logInfo(url);
        CreateAccount.logInfo(new_Email);
        CreateAccount.logInfo(new_Password);
        CreateAccount.logInfo(new_UserName);

        cy.visit(url);
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
        CreateAccount.enterEmail(new_Email);
        CreateAccount.enterFirstName(new_UserName);
        CreateAccount.enterPassword(new_Password);


        CreateAccount.verifyRegistrationButtonIsEnabled();
    })
})

describe('Create Account On Etsy',() =>{
    
    it('Should Create Account On Etsy Successfully!', () =>{
        CreateAccount.clickCreateAccountButton();
        ProductDashboard.VerifyAccountCreatedSuccessfully(new_UserName);
    })
})

