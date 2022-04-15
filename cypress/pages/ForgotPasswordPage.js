export default class ForgotPasswordPage {
    static emailAddressField = 'input[placeholder="Email address"]'
    static passwordSentText = 'p > :nth-child(1)'
    static resendLink = 'a:contains("Resend reset password mail.")'

    static enterEmailAndClickGetResetLink(email) {
        cy.get(this.emailAddressField)
            .should('be.enabled')
            .type(email)

        cy.get('button:contains(" Get reset link ")')
            .should('be.enabled')
            .click()
    }

    static getEmailSentConfirmation() {
        return cy.get(this.passwordSentText)
    }

    static clickResendPasswordLink() {
        cy.get(this.resendLink)
            .should('be.visible')
            .click()
    }

    static getResendLink() {
        return cy.get(this.resendLink)
    }
}