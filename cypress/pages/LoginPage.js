export default class LoginPage {

    static userName = '[data-testing-uid="login-form-username-input"]'
    static password = '[data-testing-uid="login-form-password-input"]'
    static invalidCredentialsErrorMessage = 'span.ce-validation__hint'
    static forgotPasswordLink = '[cetestinguid="login-form-forgotPassword-link"]'

    static enterCredentials(username, password) {
        cy.get(this.userName)
            .type(username)
        cy.get(this.password)
            .type(password)
    }

    static submitCredentials() {
        cy.contains('Sign In ').click()
    }

    static getInvalidCredentailsErrorMessage() {
        return cy.get(this.invalidCredentialsErrorMessage)
    }

    static clickForgotPasswordLink() {
        cy.get(this.forgotPasswordLink)
            .should('be.visible')
            .click()
    }
}

