// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('verifyURL', (url) => {
    cy.url().should('contain', url)
})

Cypress.Commands.add('loginWithCredentials', (username, password) => {
    cy.get('[data-testing-uid="login-form-username-input"]')
            .type(username)
    cy.get('[data-testing-uid="login-form-password-input"]')
            .type(password)
    cy.contains('Sign In ').click()
})

Cypress.Commands.add('verifyComponentIsLoaded', () => {
    cy.get('h2:contains("Analyses")')
        .should('exist')
        .should('be.visible')
        .should('contain.text', 'Analyses')
    cy.get('[cetestinguid="home-search-filter"]')
        .should('exist')
        .should('be.visible')
    cy.get('div.ce-tiles--with-css-grid')
        .should('exist')
        .should('be.visible')
    cy.get('div.ce-tile-column')
        .each( $tile => {
            cy.wrap($tile)
                .scrollIntoView()
                .should('exist')
                .should('be.visible')
            })
})