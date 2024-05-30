import React from 'react'
import EditFormLine from '../EditFormLine/EditFormLine'
import { Questions } from '../../../types'

interface QuestionBankTableProps {
	questions: Questions
	setAllQuestions: React.Dispatch<React.SetStateAction<Questions>>
}

function QuestionBankTable({
	questions,
	setAllQuestions,
}: QuestionBankTableProps) {
	const handleDelete = async (id: number) => {
		console.log(`Deleting question with id: ${id}`)
		fetch(`http://localhost:3000/delete-post/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`)
				}
				return response.text() // Expecting a plain text response
			})
			.then((data) => {
				console.log('Delete response:', data)
				// Update the state with the filtered list of questions
				setAllQuestions((prevQuestions) =>
					prevQuestions.filter((question) => question.id !== id)
				)
			})
			.catch((error) => {
				console.error('Error:', error)
			})
	}

	return (
		<div className='question-bank-table'>
			{questions.map((question) => (
				<EditFormLine
					key={question.id}
					question={question}
					onDelete={() => handleDelete(question.id)}
				/>
			))}
		</div>
	)
}

export default QuestionBankTable
