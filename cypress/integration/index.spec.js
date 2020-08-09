/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  // https://on.cypress.io/interacting-with-elements

  it('Check if elements exist', () => {
    // https://on.cypress.io/type
    cy.contains('code', 'src/App.tsx')
    cy.contains('a', 'Learn React')
  })
})
