
import BasePage from "../BasePage";
export default class ProductSearch extends BasePage{

    static enterProductNameInSearchBox(productName){
        cy.get("input#global-enhancements-search-query").clear().type(productName);
    }
    
    static clickSearchButton(){
        cy.get("button[aria-label='Search']").click();
    }

    static verifySearchedProductReturnSuccessfull(){
        cy.get("div.v2-listing-card__img").eq(0).should('be.visible');
    }

    static getProductLink(){
        cy.get("a.listing-link").should('have.attr','href').then((href)=>{
            this.logInfo(href);
        })
            
        
    }

}