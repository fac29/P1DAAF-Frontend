describe('Add question user journey', () => {
  it('A user can navigate to the quetsion bank and successfully add a new question', () => {
    const question = 'When was England last conquered?'
    cy.visit("http://localhost:5173/");
    cy.get('.space-x-8 > :nth-child(2) > .text-white > span').click()
    cy.get('.flex-col > :nth-child(1) > .mx-2').click()
    cy.get('.grid > :nth-child(2) > .bg-blue-500').select('History')
    cy.get(':nth-child(4) > .bg-blue-500').select('easy')
    cy.get('[name="question"]').type(question)
    cy.get('[name="option 1"]').type('1066')
    cy.get('[name="option 2"]').type('1166')
    cy.get('[name="option 3"]').type('1266')
    cy.get('[name="option 4"]').type('1366')
    cy.get(':nth-child(16) > .bg-blue-500').select('1066')
    cy.get(':nth-child(2) > .mx-2').click()
    cy.get('.question-bank-table').should('contain', question)
    cy.get('.question-bank-table').contains(question).parent().children().find('button').contains('Delete').click()
  })
})