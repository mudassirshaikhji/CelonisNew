/// <reference types="Cypress" />

export default class ProcessAnalyticsPage {
    static orderToCashTitle = '[title="--> SAP ECC - Order to Cash"]'
    static purchaseToPayTitle = '[title="--> SAP ECC - Purchase to Pay "]'
    static serviceNowTicketing = '[title="--> ServiceNow Ticketing"]'
    static analysesLabel = 'h2:contains("Analyses")'
    static search = '[cetestinguid="home-search-filter"]'
    static grid = 'div.ce-tiles--with-css-grid'
    static tiles = 'div.ce-tile-column'

    static loadOrderToCash() {
        cy.get(this.orderToCashTitle)
            .should('exist')
            .click()
    }

    static loadPurchaseToPay() {
        cy.get(this.purchaseToPayTitle)
            .should('exist')
            .click()
    }

    static loadServiceNowTicketing() {
        cy.get(this.serviceNowTicketing)
            .should('exist')
            .click()
    }

    static getAnalysesLabel() {
        return cy.get(this.analysesLabel)
    }

    static getSearchComponent() {
        return cy.get(this.search)
    }

    static getGrid() {
        return cy.get(this.grid)
    }

    static getTiles() {
        return cy.get(this.tiles)
    }
}