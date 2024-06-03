import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Button from '../../common/Button/Button'
import QuestionBankTable from '../../common/QuestionBankTable/QuestionBankTable'
import { Questions } from '../../../types'
import { REACT_APP_API_URL } from '../../../utils/helper'

function QuestionBankPage() {
	const [allQuestions, setAllQuestions] = useState<Questions>([])
	const navigate = useNavigate()

	//const apiURL = process.env.REACT_APP_API_URL
	const apiURL = REACT_APP_API_URL
	console.log(`URL es: ${apiURL}`)

	const backHandler = () => {
		navigate('/home')
	}
	function addQuestionHandler() {
		navigate('/questionbank/addquestion')
	}
	useEffect(() => {
		fetch(`${apiURL}`, {
			// Update the URL to match your endpoint
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => {
				// Handle the response from the backend
				setAllQuestions(data)
			})
			.catch((error) => {
				// Handle any errors
				console.error('Error:', error)
			})
	}, [apiURL]) // Empty dependency array means this useEffect runs once on mount

	return (
		<div className='container mx-auto flex flex-col items-center mt-10 p-5'>
			<h1 className='text-4xl font-bold mb-4 text-white'>Question bank</h1>
			<section className='mb-6 text-gray-400 text-center'>
				<p>Create - Edit - Delete questions.</p>
			</section>

			<div className='flex flex-col space-y-4'>
				<Button
					name='CREATE QUESTION'
					color='blue'
					handler={addQuestionHandler}
				/>
				<QuestionBankTable
					questions={allQuestions}
					setAllQuestions={setAllQuestions}
				/>
				<Button name='BACK' color='orange' handler={backHandler} />
			</div>
		</div>
	)
}

export default QuestionBankPage
