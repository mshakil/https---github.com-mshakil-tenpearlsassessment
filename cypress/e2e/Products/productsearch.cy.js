
import CreateAccount from '../../page-objects/pages/createaccount';
import ProductDashboard from '../../page-objects/pages/productdashboard';
import ProductSearch from '../../page-objects/pages/productsearch'
import AddToBasket from '../../page-objects/pages/addtobasket'

describe('Verify That User Is Able to Search Product And Add In Basket.',() =>{
    
    before(function(){
        cy.fixture('testdata').then(webUrl => {
            const url = webUrl.baseUrl;
            cy.visit(url);
        })
    })

    it('Should Enter Product Name In Search Bar and Click Search Button',() =>{
        ProductSearch.enterProductNameInSearchBox("Handmade gifts");
        ProductSearch.clickSearchButton();
        ProductSearch.verifySearchedProductReturnSuccessfull();
        ProductSearch.getProductCardTitle();

        ProductSearch.getProductLinkAndNavigateToProductPage(); 
        ProductSearch.verifyThatProductLinkIsOpenSuccessfully();                           
    })

    it('Should Select Product Variations, Personalization And Click On Add To Basket Button',()=>{
        AddToBasket.selectVariation(2);
        AddToBasket.enterPersonalization('Handle');

        AddToBasket.clickAddToBasketButton();
        AddToBasket.verifyProductIsAddedSuccessfully(1)
    })

    it('Should Verify Removal of Product From Basket',()=>{
        AddToBasket.clickRemoveProductFromBasket();
        AddToBasket.verifyBasketIsEmpty();
    })
})
