
export class CheckoutPage{

    
    checkoutFromCart(firstname, lastname, postalcode, successmessage){
       
        cy.get('.shopping_cart_badge').invoke('text').then((badgeCount) => {
            // Log the dynamic badge count to the console for verification
            cy.log('Dynamic badge count is: ' + badgeCount);
            // Step 2: Click on the parent anchor tag
            cy.get('.shopping_cart_badge').parent('a').should('be.visible').click();
            
        });

        cy.get('#checkout').click()
        cy.get('#first-name').type(firstname)
        cy.get('#last-name').type(lastname)
        cy.get('#postal-code').type(postalcode)
        cy.get('#continue').click()
        cy.get('#finish').click()

        cy.get('[data-test="complete-header"]')
        .invoke('text')
        .then((text) => {
            expect(text).to.equal(successmessage);
      });

    }

}
export const checkout = new CheckoutPage()