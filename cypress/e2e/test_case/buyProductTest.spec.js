import { login } from "../../support/page_objects/loginPage"
import { productstocart } from "../../support/page_objects/productCartPage"
import { checkout } from "../../support/page_objects/checkoutPage"


describe('Test the functionality of login, adding products to the cart, and completing the purchase', () => {

  beforeEach('open the application url', () => {
    
    cy.visit('https://www.saucedemo.com')
    
  })

  it('Verify Login with Valid Credentials', () => {

    login.loginWithValidCredentials()

  })

  it('Verify Adding Products to Cart', () => {
    login.loginWithValidCredentials()
    productstocart.addingProductsToCart()
  })

  
  it.only('verify Complete the Purchase', () => {
    login.loginWithValidCredentials()
    productstocart.addingProductsToCart()
    checkout.checkoutFromCart()

  })

})