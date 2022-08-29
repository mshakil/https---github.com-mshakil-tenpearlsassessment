import ProductSearch from '../../page-objects/pages/productsearch'
import AddToBasket from '../../page-objects/pages/addtobasket'

describe('Verify That User Is Able to Search Product And Add In Basket.',() =>{
    
    before(function(){
        cy.fixture('testdata').then(webUrl => {
            const url = webUrl.baseUrl;
            const email = webUrl.userInfo.customerEmail;
            const password = webUrl.userInfo.customerPassword;

            cy.visit(url);
            cy.login(email,password);
        })
    })

    it('Should Enter Product Name In Search Bar and Click Search Button',() =>{

        cy.fixture("testdata").then(dataset=>{

            const searchProduct = dataset.productToSearch;
            const indexOfProduct = dataset.productToSelectFromSearch;

            ProductSearch.enterProductNameInSearchBox(searchProduct);
            ProductSearch.clickSearchButton();

            ProductSearch.verifySearchedProductReturnSuccessfull(indexOfProduct);
            ProductSearch.getProductCardTitle(indexOfProduct);
            ProductSearch.getProductLinkAndNavigateToProductPage(indexOfProduct); 

            ProductSearch.verifyThatProductLinkIsOpenSuccessfully();    
        })           
    });

    it('Should Select Product Variations, Personalization And Click On Add To Cart Button And Proceed to Check Out',()=>{
        cy.fixture('testdata').then(info=>{
            const message = info.productSuccfullyAdded;
            const quatity = info.productQuantity;

            AddToBasket.clickAddToBasketButton();
            AddToBasket.verifyProductIsAddedSuccessfully(message,quatity)
        })
    });

    it.skip('Should Verify Removal of Product From Basket',()=>{
        AddToBasket.clickRemoveProductFromBasket();
        AddToBasket.verifyBasketIsEmpty();
    });
})
