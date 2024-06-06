describe('Edit question page', () => {
	it.only('Edit category on question 30', () => {
		cy.visit('http://localhost:5173/questionbank/editquestion/1')
		// Ensure the dropdown is loaded by checking for specific options
		cy.get('[data-cy=categoryDropdown]')
			.should('be.visible')
			.find('option')
			.should('have.length.greaterThan', 1) // Adjust this as per your dropdown options count

		cy.wait(50)
		// Capture the initial value of the dropdown
		cy.get('[data-cy=categoryDropdown] option:selected')
			.invoke('text')
			.then((initialText) => {
				cy.log(`Initial text: ${initialText}`)

				// Change to Science
				cy.get('[data-cy=categoryDropdown]').select('History')
				// Assert the text of the selected option
				cy.get('[data-cy=categoryDropdown] option:selected')
					.invoke('text')
					.should('eq', 'History')

				//Press Edit question button to save it
				cy.get('[data-cy=editButton]').click()

				//Open again the same question
				cy.visit('http://localhost:5173/questionbank/editquestion/1')

				cy.get('[data-cy=categoryDropdown]')
					.should('be.visible')
					.find('option')
					.should('have.length.greaterThan', 1) // Adjust this as per your dropdown options count

				cy.wait(50)
	
				cy.get('[data-cy=categoryDropdown] option:selected').invoke('text')

                cy.wait(50)

				// Change back to the initial value using the captured text
				cy.get('[data-cy=categoryDropdown]').select(initialText)
				// Assert the text of the selected option
				cy.get('[data-cy=categoryDropdown] option:selected')
					.invoke('text')
					.should('eq', initialText)

			
				//Save changes on question
				//Press Edit question button to save
				cy.get('[data-cy=editButton]').click()

			})
	})
})
