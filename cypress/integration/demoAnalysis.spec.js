/// <reference types="Cypress" />

import ProcessAnalyticsPage from "../pages/ProcessAnalyticsPage"
import SideNavbar from "../pages/SideNavbar"

describe('Login Tests', function() {
    before(function() {
        cy.visit('https://applications.eu-1.celonis.cloud/ui/login')
        cy.loginWithCredentials(
            Cypress.env('username'), 
            Cypress.env('password')
           )
    })
    
    beforeEach(function() {
        cy.fixture('analytics/processAnalytics').as('analytics')
    })

    it('should load Order to cash analyses section', function() {
        SideNavbar.navigateToProcessAnalyticsPage()
        ProcessAnalyticsPage.loadOrderToCash()
        cy.verifyComponentIsLoaded()
    })

    it('should load Purchase to pay analyses section', function() {
        ProcessAnalyticsPage.loadPurchaseToPay()
        cy.verifyComponentIsLoaded()
    })

    it('should load Service now ticketing analyses section', function() {
        ProcessAnalyticsPage.loadServiceNowTicketing()
        cy.verifyComponentIsLoaded()
    })

})