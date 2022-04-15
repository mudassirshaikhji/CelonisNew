/// <reference types="Cypress" />

export default class LoggedOutPage {

    static signIntoYourTeam = 'h1.ce-login-layout__title'

    static signIntoYourTeamLabel() {
        return cy.get(this.signIntoYourTeam)
    }
}