
export class LoginPage{

    loginWithValidCredentials(username, password, inventorypage, pagetitle){
        cy.get('#user-name').type(username)
        cy.get('#password').type(password)
        cy.get('#login-button').click()
        cy.url().should('include', inventorypage);
        cy.get('.title').should('have.text', pagetitle);
    }
}
export const login = new LoginPage()