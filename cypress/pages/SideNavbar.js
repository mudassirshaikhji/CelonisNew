export default class LandingPage {
    static celonisLogo = '[cetestinguid="ceHeaderLogo-link"]' 
    static avatar = 'span.ce-avatar__letter'
    static logoutButton = '[cetestinguid="userMenu-logout-button"]'
    static moreButton = '.ce-app-switcher__more > .ce-cloud-header-link'
    static processAnalytics = '[data-testing-uid="ceAppSwitcher-process-mining-link"]'

    static getCelonisLogo()  {
        return cy.get(this.celonisLogo)
    }

    static clickOnAvatar() {
        cy.get(this.avatar)
            .should('be.visible')
            .click()
    }

    static logout() {
        this.clickOnAvatar()
        cy.get(this.logoutButton)
            .should('be.visible')
            .click()
    }

    static navigateToProcessAnalyticsPage() {
        cy.get(this.moreButton, {timeout: 10000})
            .should('exist')
            .should('be.visible')
            .click()
        cy.get(this.processAnalytics)
            .should('exist')
            .click()
    }
}