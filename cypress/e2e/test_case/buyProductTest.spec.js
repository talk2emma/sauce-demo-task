import { login } from "../../support/page_objects/loginPage"
import { productstocart } from "../../support/page_objects/productCartPage"
import { checkout } from "../../support/page_objects/checkoutPage"


describe('Test the functionality of login, adding products to the cart, and completing the purchase', () => {

  beforeEach('open the application url', () => {
    cy.visit('/') 
  })

  it('Verify Login with Valid Credentials', () => {
    cy.fixture('testData.json').then((data) => {
      const { username, password, inventorypage, pagetitle } = data.validCredentials;
    login.loginWithValidCredentials(username, password, inventorypage, pagetitle)
    })
  })
  

  it('Verify Adding Products to Cart', () => {
    cy.fixture('testData.json').then((data) => {
      const { username, password, inventorypage, pagetitle } = data.validCredentials;
    login.loginWithValidCredentials(username, password, inventorypage, pagetitle)
    productstocart.addingProductsToCart()
    })
  })

  
  it('verify Complete the Purchase', () => {
    cy.fixture('testData.json').then((data) => {
      const { username, password, inventorypage, pagetitle } = data.validCredentials;
      const { firstname, lastname, postalcode, successmessage } = data.buyerDetails;
    login.loginWithValidCredentials(username, password, inventorypage, pagetitle)
    productstocart.addingProductsToCart()
    checkout.checkoutFromCart(firstname, lastname, postalcode, successmessage)
    })

  })

})
