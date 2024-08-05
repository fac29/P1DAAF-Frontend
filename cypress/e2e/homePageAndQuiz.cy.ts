describe('Check home page and run the quiz', () => {
  describe('Home page functionality', () => {
    it('starts the quiz', () => {
      cy.visit('http://localhost:5173/');

      cy.get('.text-4xl').contains('Take a Quiz');

      cy.get('.bg-orange-500').should('exist');

      cy.get(':nth-child(1) > .bg-blue-500')
        .select(6)
        .invoke('val')
        .should('eq', 'Music');
      cy.get(':nth-child(2) > .bg-blue-500')
        .select(1)
        .invoke('val')
        .should('eq', 'easy');
      cy.get('.bg-orange-500').should('exist').click();

      cy.get('[data-value="The Grammy Award"]').should('be.visible').click();
      cy.get('.mx-2').should('be.visible').click();

      cy.get('[data-value="Ludwig van Beethoven"]').should('exist').click();
      cy.get('.mx-2').should('exist').click();

      cy.get('.top-2').should('exist').click();
      cy.get('.mx-2').should('exist').click();
    });
  });
});
