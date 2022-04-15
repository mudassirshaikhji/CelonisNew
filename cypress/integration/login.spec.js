/// <reference types="Cypress" />

import LandingPage from "../pages/SideNavbar"
import LoginPage from "../pages/LoginPage"

describe('Login Tests', function() {
    
    beforeEach(function() {
        cy.visit('https://applications.eu-1.celonis.cloud/ui/login')
        cy.fixture('login/login').as('login')
    })

    it('should show an error when trying to login with invalid credentials', function() {
        LoginPage.enterCredentials(
             Cypress.env('invalidUserName'), 
             Cypress.env('invalidPassword')
            )
        LoginPage.submitCredentials()

        //Error message assertion
        LoginPage.getInvalidCredentailsErrorMessage()
            .should('be.visible')
            .should('have.text', this.login.invalidCredentialsErrorMessage)
    })

    it('should login with valid credentials', function() {
        LoginPage.enterCredentials(
            Cypress.env('username'), 
            Cypress.env('password')
           )
       LoginPage.submitCredentials()

       //User logged in assertion
       //cy.url().should('contain', this.login.successfullyLoggedInURL)
       cy.verifyURL(this.login.successfullyLoggedInURL)
       LandingPage.getCelonisLogo()
            .should('be.visible', {timeout: 20000})
    })
})