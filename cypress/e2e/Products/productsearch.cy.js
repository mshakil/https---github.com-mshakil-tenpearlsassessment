import {url} from '../../../config';
import CreateAccount from '../../page-objects/pages/createaccount';
import ProductDashboard from '../../page-objects/pages/productdashboard';
import ProductSearch from '../../page-objects/pages/productsearch'

describe('Verify Required Fields Of Create Account',() =>{
    
    before(function(){
        cy.visit(url);
    })

    it('Should Enter Product Name In Search Bar and Click Search Button',() =>{
        ProductSearch.enterProductNameInSearchBox("Find handmade gifts");
        ProductSearch.clickSearchButton();
        ProductSearch.verifySearchedProductReturnSuccessfull();
        ProductSearch.getProductLink();                                                                                    
    })

    it('Should verify that Register Button Is Enable When All Fields Are Not Empty',() =>{
        
    })
})
