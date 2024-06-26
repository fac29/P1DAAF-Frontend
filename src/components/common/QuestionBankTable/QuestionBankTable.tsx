import React from 'react'
import EditFormLine from '../EditFormLine/EditFormLine'
import { Questions } from '../../../types'
import { useNavigate } from 'react-router-dom'
//import { REACT_APP_API_URL } from '../../../utils/helper'

interface QuestionBankTableProps {
	questions: Questions
	setAllQuestions: React.Dispatch<React.SetStateAction<Questions>>
}

function QuestionBankTable({
	questions,
	setAllQuestions,
}: QuestionBankTableProps) {
	//const apiUrl = process.env.apiURL

	const apiURL = import.meta.env.VITE_API_URL;
	console.log(`APIRUL is: ${apiURL}`)

	const handleDelete = (id: number) => {
		console.log(`Deleting question with id: ${id}`)
		fetch(`${apiURL}/delete-post/${id}`, {
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
	const navigate = useNavigate()

	const handleEdit = (id: number) => {
		console.log(`Editing question with id: ${id}`)
		navigate(`/questionbank/editquestion/${id}`)
	}

	return (
		<div className='question-bank-table'>
			{questions.map((question) => (
				<EditFormLine
					key={question.id}
					question={question}
					onDelete={() => handleDelete(question.id)}
					onEdit={() => handleEdit(question.id)}
				/>
			))}
		</div>
	)
}

export default QuestionBankTable
