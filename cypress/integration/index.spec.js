/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Check if elements exist', () => {
    cy.contains('h1', 'ds-gh-issues')
    cy.contains('.App-intro', 'A simple app that pulls the latest issues from Create React App repo')
  })

  it('Checks if Previous button is disabled in the first page', () => {
    cy.get('.Btn-previous').should('have.class', 'disabled')
  })

  it('Checks if Previous button is not disabled in the second page', () => {
    cy.get('.Btn-next').click()
    cy.wait(3000)
    cy.get('.Btn-previous').should('not.have.class', 'disabled')
  })
})
