/// <reference path="../support/commands.d.ts" />
describe('log in', () =>{
  it('succesfully log in', () =>{
    cy.visit('/login')
    cy.guiLogin()
    cy.contains('a',    ' Create a new note').should('be.visible')
  })
})