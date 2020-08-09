/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  // https://on.cypress.io/interacting-with-elements

  it('Check if elements exist', () => {
    // https://on.cypress.io/type
    cy.contains('h1', 'ds-gh-issues')
    cy.contains('.App-intro', 'A simple app that pulls the latest issues from Create React App repo')
  })
})
