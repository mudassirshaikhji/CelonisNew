/// <reference types="Cypress" />

import ForgotPasswordPage from "../pages/ForgotPasswordPage"
import LandingPage from "../pages/SideNavbar"
import LoggedOutPage from "../pages/LoggedoutPage"
import LoginPage from "../pages/LoginPage"

describe('Forgot password Tests', function() {
    before(function() {
        cy.visit('https://applications.eu-1.celonis.cloud/ui/login')
    })
    
    beforeEach(function() {
        cy.fixture('password/password').as('password')
    })

    it('should send a forgot password link', function() {
        LoginPage.clickForgotPasswordLink()

        cy.verifyURL(this.password.forgotPasswordURL)
        ForgotPasswordPage.enterEmailAndClickGetResetLink(Cypress.env('invalidUserName'))

        ForgotPasswordPage.getEmailSentConfirmation()
            .should('exist')
            .contains(this.password.passordSentText)
    })

    it('should show the Resend reset password mail link and this link should disappear on clicking', function(){
        ForgotPasswordPage.clickResendPasswordLink()
        ForgotPasswordPage.getEmailSentConfirmation()
            .should('exist')
            .contains(this.password.passordSentText)
        ForgotPasswordPage.getResendLink()
            .should('not.exist')
    })

})