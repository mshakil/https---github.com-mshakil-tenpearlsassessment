import {url} from '../../../config';
import CreateAccount from '../page-objects/pages/createaccount'

describe("Verify User Should Login To Application", ()=> {

    before(function(){
        cy.visit(url);
        CreateAccount.clickSignIn();
    })
    it("Should Login To Application Successfully", ()=>{

CreateAccount.enterEmail(new_Email);
CreateAccount.enterPassword()
    })
})