/// <reference types="Cypress" />

import LandingPage from "../pages/SideNavbar"
import LoggedOutPage from "../pages/LoggedoutPage"
import LoginPage from "../pages/LoginPage"

describe('Logout Tests', function() {
    before(function() {
        cy.visit('https://applications.eu-1.celonis.cloud/ui/login')
    })
    
    beforeEach(function() {
        cy.fixture('logout/logout').as('logout')
    })

    it('should successfully log out', function() {
        LoginPage.enterCredentials(
            Cypress.env('username'), 
            Cypress.env('password')
           )
       LoginPage.submitCredentials()
       cy.url().should('contain', '/package-manager')
       LandingPage.getCelonisLogo()
            .should('be.visible', {timeout: 20000})

       LandingPage.logout()     

       cy.verifyURL(this.logout.successfullyLoggedOutURL)
       LoggedOutPage.signIntoYourTeamLabel()
            .should('be.visible')
            .should('have.text', this.logout.signIntoYourTeamLabel)
    })

})