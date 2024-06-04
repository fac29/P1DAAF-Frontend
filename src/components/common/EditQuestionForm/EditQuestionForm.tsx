import React, { useState, useEffect } from 'react'
import { Question } from '../../../types'
import { REACT_APP_API_URL } from '../../../utils/helper'

interface EditQuestionFormProps {
	id: number
}

const EditQuestionForm: React.FC<EditQuestionFormProps> = ({ id }) => {
	const [questionData, setQuestionData] = useState<Question>({
		id: 0,
		category: '',
		difficulty: 'medium',
		question: 'Default start values',
		options: ['a', 'b', 'c', 'd'],
		answer: '',
		favourited: false,
		timestamp: new Date(), // Initialize timestamp as a Date object
	})
	const apiURL = REACT_APP_API_URL

	useEffect(() => {
		const fetchData = async () => {
			try {
				// Log the id to verify it's being passed correctly
				console.log('Fetched ID:', id)

				// Convert id to number if necessary
				const numericId = Number(id)
				if (isNaN(numericId)) {
					throw new Error('Invalid ID')
				}

				const response = await fetch(
					`${apiURL}/get-question-by-id/${id}`					
				)
				const responseData: [Question] = await response.json()
				const data: Question = responseData[0]
				data.timestamp = new Date(data.timestamp) // Convert timestamp to Date object
				setQuestionData(data)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}
		fetchData()
	}, [id, apiURL])

	const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
		const { name, type, checked, value } = event.currentTarget

		setQuestionData((prevState) => ({
			...prevState,
			[name]: type === 'checkbox' ? checked : value,
		}))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log(questionData)
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='text-black p-4 bg-gray-100 rounded shadow-md'
		>
			<div className='grid grid-cols-2 gap-2 auto-cols-min'>
				{/* <label className="block text-gray-700 font-bold mb-2 self-end">
          ID:
        </label>
        <input
          type="text"
          name="id"
          value={questionData.id}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded bg-white"
          disabled
        /> */}

				<label className='block text-gray-700 self-end font-bold mb-2'>
					Category:
				</label>
				<input
					type='text'
					name='category'
					value={questionData.category}
					onChange={handleInputChange}
					className='w-full px-3 py-2 border rounded bg-white'
				/>

				<label className='block text-gray-700 font-bold mb-2 self-end'>
					Difficulty:
				</label>
				<input
					type='text'
					name='difficulty'
					value={questionData.difficulty}
					onChange={handleInputChange}
					className='w-full px-3 py-2 border rounded bg-white'
				/>

				<label className='block text-gray-700 font-bold mb-2 self-end'>
					Question:
				</label>
				<input
					type='text'
					name='question'
					value={questionData.question}
					onChange={handleInputChange}
					className='w-full px-3 py-2 border rounded bg-white'
				/>

				<label className='block text-gray-700 font-bold mb-2 self-end'>
					Option 0:
				</label>
				<input
					type='text'
					name='options'
					value={questionData.options[0]}
					onChange={handleInputChange}
					className='w-full px-3 py-2 border rounded bg-white'
				/>

				<label className='block text-gray-700 font-bold mb-2 self-end'>
					Option 1:
				</label>
				<input
					type='text'
					name='options'
					value={questionData.options[1]}
					onChange={handleInputChange}
					className='w-full px-3 py-2 border rounded bg-white'
				/>

				<label className='block text-gray-700 font-bold mb-2 self-end'>
					Option 2:
				</label>
				<input
					type='text'
					name='options'
					value={questionData.options[2]}
					onChange={handleInputChange}
					className='w-full px-3 py-2 border rounded bg-white'
				/>

				<label className='block text-gray-700 font-bold mb-2 self-end'>
					Option 3:
				</label>
				<input
					type='text'
					name='options'
					value={questionData.options[3]}
					onChange={handleInputChange}
					className='w-full px-3 py-2 border rounded bg-white'
				/>

				<label className='block text-gray-700 font-bold mb-2 self-end'>
					Answer:
				</label>
				<input
					type='text'
					name='answer'
					value={questionData.answer}
					onChange={handleInputChange}
					className='w-full px-3 py-2 border rounded bg-white'
				/>

				<label className='block text-gray-700 font-bold mb-2 self-end'>
					Favourited:
				</label>
				<input
					type='checkbox'
					name='favourited'
					checked={questionData.favourited}
					onChange={handleInputChange}
					className='w-full px-3 py-2 border rounded bg-white'
				/>

				<label className='block text-gray-700 font-bold mb-2 self-end'>
					Timestamp:
				</label>
				<input
					type='date'
					name='timestamp'
					value={questionData.timestamp.toISOString().substr(0, 10)}
					onChange={handleInputChange}
					className='w-full px-3 py-2 border rounded bg-white'
				/>
			</div>

			<button
				type='submit'
				className='mt-4 px-4 py-2 bg-blue-500 text-white rounded'
			>
				Edit question
			</button>
		</form>
	)
}

export default EditQuestionForm
