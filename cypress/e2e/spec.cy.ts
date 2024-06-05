describe('template spec', () => {
	it('passes', () => {
		cy.visit('http://localhost:5173/')
	})
})

describe('home page', () => {
	it('the h1 contains the correct text', () => {
		cy.visit('http://localhost:5173/')
		cy.get('h1').contains('Take a Quiz')
	})

	describe('Home page functionality', () => {
		beforeEach(() => {
			cy.visit('http://localhost:5173/')
		})

		it('renders the homepage title', () => {
			cy.get('.text-4xl').contains('Take a Quiz')
		})
		it('renders the Start Quiz button', () => {
			cy.get('.bg-orange-500').should('exist')
		})
		it('clicks to start the quiz with dropdown selections (Music & easy)', () => {
			cy.get(':nth-child(1) > .bg-blue-500')
				.select(6)
				.invoke('val')
				.should('eq', 'Music')
			cy.get(':nth-child(2) > .bg-blue-500')
				.select(1)
				.invoke('val')
				.should('eq', 'easy')
			cy.get('.bg-orange-500').should('exist').click()
		})
	})
})

describe('home page', () => {
	describe('Home page functionality', () => {
		it('starts the quiz', () => {
			cy.visit('http://localhost:5173/')

			cy.get('.text-4xl').contains('Take a Quiz')

			cy.get('.bg-orange-500').should('exist')

			cy.get(':nth-child(1) > .bg-blue-500')
				.select(6)
				.invoke('val')
				.should('eq', 'Music')
			cy.get(':nth-child(2) > .bg-blue-500')
				.select(1)
				.invoke('val')
				.should('eq', 'easy')
			cy.get('.bg-orange-500').should('exist').click()

			cy.get('[data-value="The Grammy Award"]').should('be.visible').click()
			cy.get('.mx-2').should('be.visible').click()

			cy.get('[data-value="Ludwig van Beethoven"]').should('exist').click()
			cy.get('.mx-2').should('exist').click()

			cy.get('.top-2').should('exist').click()
			cy.get('.mx-2').should('exist').click()
		})
	})
})

describe('Edit question page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/questionbank/editquestion/')
  })

  it.only('Edit category on question 1', () => {
    cy.visit('http://localhost:5173/questionbank/editquestion/30')

    // Ensure the dropdown is loaded by checking for specific options
    cy.get('.grid > :nth-child(2) > select')
      .should('be.visible')
      .find('option')
      .should('have.length.greaterThan', 1) // Adjust this as per your dropdown options count


    cy.wait(50)
    // Capture the initial value of the dropdown
    cy.get('.grid > :nth-child(2) > select option:selected')
      .invoke('text')
      .then((initialText) => {
        cy.log(`Initial text: ${initialText}`)

        // Change to Science
        cy.get('.grid > :nth-child(2) > select').select('Science')
        // Assert the text of the selected option
        cy.get('.grid > :nth-child(2) > select option:selected')
          .invoke('text')
          .should('eq', 'Science')

        // Change to Geography
        cy.get('.grid > :nth-child(2) > select').select('Geography')
        // Assert the text of the selected option
        cy.get('.grid > :nth-child(2) > select option:selected')
          .invoke('text')
          .should('eq', 'Geography')

        // Change back to the initial value using the captured text
        cy.get('.grid > :nth-child(2) > select').select(initialText)
        // Assert the text of the selected option
        cy.get('.grid > :nth-child(2) > select option:selected')
          .invoke('text')
          .should('eq', initialText)
      })
  })
})
