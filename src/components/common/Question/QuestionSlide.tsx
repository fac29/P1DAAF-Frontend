// import { useEffect,
import { useState } from 'react'
import Button from '../Button/Button'
import Score from '../Score/Score'
interface SlideProps {
	questions: string[]
	options: string[][]
	answers: string[]
}

export function QuestionSlide({ questions, options, answers }: SlideProps) {
	//initalizing the state
	const totalLength = questions.length

	//Answer that user selected
	const [selectedOption, setselectedOption] = useState('')

	//handler to change the colour of the button ("option")
	const handleOptionClick = (option: string) => {
		setselectedOption(option)
		console.log(`Selected Option is ${option}`)
	}

	//const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1)
	const [questionIndex, setQuestionIndex] = useState(0)

	console.log(
		`questionIndex: ${questionIndex}  questionLength: ${questions.length}`
	)
	//when you press next button...
	const nextHandler = () => {
		if (questionIndex < totalLength - 1) {
			setQuestionIndex((questionIndex) => questionIndex + 1)
			if (selectedOption === answers[questionIndex]) {
				setScore((score) => score + 1)
				console.log(`${score + 1}`)
			}
		}
		//ADD
		else return <Score score={score * 10} />
	}

	//store the score
	const [score, setScore] = useState<number>(0)

	return (
		<div className='flex flex-col justify-center items-center h-screen w-screen bg-gray-100'>
			<div id='questionCard' className='flex flex-col justify-center items-center w-96 h-auto p-10 border-4 border-gray-300 bg-white rounded-lg shadow-lg'>
				<div className='text-2xl font-bold text-black mb-4'>
					{' '}
					Question: {questionIndex + 1}
				</div>
				<div className=' text-black'>{questions[questionIndex]}</div>

				<div className='pb-4'>
					{/* legendary piece of code  */}
					{options[questionIndex].map((option, index) => {
						return (
							<button
								key={index}
								onClick={() => handleOptionClick(option)}
								className={`w-full py-2 my-2 text-center rounded-lg ${
									selectedOption === option
										? 'bg-blue-500 text-white'
										: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
								}`}
								data-value={option}
							>
								{option}
							</button>
						)
					})}
				</div>
				<Button name='Next' handler={nextHandler} />
			</div>
			<Score score={score*100/totalLength} />
			<div className=' text-black'>{answers[questionIndex]}</div>
			
		</div>
	)
}
