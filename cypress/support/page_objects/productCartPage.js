
export class ProductToCartPage{

    addingProductsToCart(){

        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('.shopping_cart_badge').invoke('text').then((badgeCount) => {
            // Log the dynamic badge count to the console for verification
            cy.log('Dynamic badge count is: ' + badgeCount);
            // Step 2: Click on the parent anchor tag
            cy.get('.shopping_cart_badge').parent('a').should('be.visible').click();

            cy.get('.shopping_cart_badge').invoke('text').then((cartItemCountText) => {
    
                cy.get('[data-test="cart-list"]').within(() => {
                    cy.get('[data-test="inventory-item"]').its('length').then((inventoryItemCount) => {
                      // Log the number of inventory items
                      cy.log(`Number of inventory items in the cart list: ${inventoryItemCount}`);
                        console.log(`mylog: , ${inventoryItemCount}`); 
                      // Optionally, make an assertion
                      expect(inventoryItemCount).to.equal( parseInt(cartItemCountText, 10)); // Assuming you expect 2 items
                    });
                  });
                
    
                cy.get('[data-test="cart-list"]').contains('Sauce Labs Backpack')
                cy.get('[data-test="cart-list"]').contains('Sauce Labs Bike Light')
    
            });
        });
    }

}
export const productstocart = new ProductToCartPage()