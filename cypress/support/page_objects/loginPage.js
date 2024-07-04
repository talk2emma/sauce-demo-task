
export class LoginPage{

    loginWithValidCredentials(){
        cy.get('#user-name').type("standard_user")
        cy.get('#password').type("secret_sauce")
        cy.get('#login-button').click()
        cy.url().should('include', '/inventory.html');
    }

}
export const login = new LoginPage()