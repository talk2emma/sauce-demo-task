

describe('Test functionality', () => {

    // beforeEach('open the application url', () => {
      
    //   cy.visit('/')
      
    // })
  
    it('Verify Login with Valid Credentials', () => {
        cy.visit('/')
        cy.get('#user-name').type("standard_user")
        cy.get('#password').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
        cy.get('.shopping_cart_badge').parent('a').should('be.visible').click();
        
        cy.get('.shopping_cart_badge').invoke('text').then((cartItemCountText) => {
            const cartItemCount = parseInt(cartItemCountText);

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

             })

        // })
    })
  
})