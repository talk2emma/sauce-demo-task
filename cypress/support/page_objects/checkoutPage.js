
export class CheckoutPage{

    
    checkoutFromCart(){
       
        cy.get('.shopping_cart_badge').invoke('text').then((badgeCount) => {
            // Log the dynamic badge count to the console for verification
            cy.log('Dynamic badge count is: ' + badgeCount);
            //expect(parseInt(badgeCount)).to.equal(expectedCount);
            // Step 2: Click on the parent anchor tag
            cy.get('.shopping_cart_badge').parent('a').should('be.visible').click();
            
        });

        cy.get('#checkout').click()
        cy.get('#first-name').type("Emmanuel")
        cy.get('#last-name').type("Noah")
        cy.get('#postal-code').type("1001-200")
        cy.get('#continue').click()
        cy.get('#finish').click()

        cy.get('[data-test="complete-header"]')
        .invoke('text')
        .then((text) => {
            expect(text).to.equal('Thank you for your order!');
      });

    }

}
export const checkout = new CheckoutPage()