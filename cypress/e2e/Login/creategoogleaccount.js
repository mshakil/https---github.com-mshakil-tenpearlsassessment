import {url} from '../../../config';
import {new_Email} from '../../../config';
import {new_UserName} from '../../../config';
import { new_Password } from '../../../config';

import CreateAccount from '../../page-objects/pages/createaccount'
import ProductDashboard from '../../page-objects/pages/productdashboard'


describe('Verify Required Fields Of Create Account',() =>{
    
    before(function(){
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

   
})