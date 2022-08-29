
import BasePage from "../BasePage";
export default class ProductSearch extends BasePage{

    static enterProductNameInSearchBox(productName){
        cy.get("input[id='search_query_top']").clear().type(productName);
    }
    
    static clickSearchButton(){
        cy.get("button[name='submit_search']").click();
    }

    static verifySearchedProductReturnSuccessfull(productIndex){
        cy.get("ul.product_list a.product_img_link").eq(productIndex).should('be.visible');
    }

    static getProductCardTitle(productIndex){

        
            cy.get('ul.product_list a.product_img_link').eq(productIndex).then(function($elem){
                cy.log($elem.attr('title'));
                const productTitle = $elem.attr('title').trim().toString();

                cy.log(productTitle);

                //  THIS LINE OF CODE WILL SAVE 1 PRODUCT NAME SHOWING IN GRID IN TEXT FILE.
                cy.writeFile('cypress/fixtures/productname.txt',productTitle);
            })
       
    }

    static getProductLinkAndNavigateToProductPage(productIndex){
        cy.get("ul.product_list a.product_img_link").eq(productIndex).click();
    }
    static verifyThatProductLinkIsOpenSuccessfully(){
        
            cy.get("h1[itemprop='name']").then(function($elem){
                cy.readFile('cypress/fixtures/productname.txt').should('contain',$elem.text().trim());
            })   
    
    }

}