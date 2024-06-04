import { MouseEventHandler, useEffect, useState } from 'react';
//ButtonHandler?
import Button from '../Button/Button';
interface SlideProps {
	questions: string[];
	options: string[][];
	answers: string[];
	//feedback?: string;
	//onSlideAdvance?(): void;
	// onClickEvent: (event: React.MouseEvent<HTMLAnchorElement>)
}

export function QuestionSlide({ questions, options, answers }: SlideProps) {
	//initalizing the state

	//Answer that user selected
	const [selectedOption, setselectedOption] = useState('');

	//handler to change the colour of the button ("option")
	const handleOptionClick = (option: string) => {
		setselectedOption(option);
		console.log(`Option is ${option}`)
	};

	const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
	const [questionIndex, setQuestionIndex] = useState(0);

	//when you press next button...
	const incrementQuestionHandler = () => {
		//used to change the question number title at the top
		setCurrentQuestionNumber(currentQuestionNumber + 1);
		//used to display a question per button
		setQuestionIndex(questionIndex + 1);
	};

	//store the score
	const [score, setScore] = useState<number>(0);	

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const buttonValue = e.currentTarget.getAttribute('data-value');
		if (buttonValue === answers[questionIndex]) {
			setScore(score + 1);
		}
		console.log(score);
	};

	useEffect(()=>{

	}),[]

	return (
		<div className='flex flex-col justify-center items-center h-screen w-screen bg-gray-100'>
			<div className='flex flex-col justify-center items-center w-96 h-auto p-10 border-4 border-gray-300 bg-white rounded-lg shadow-lg'>
				<div className='text-2xl font-bold mb-4'>
					{' '}
					Question: {currentQuestionNumber}
				</div>
				<div>{questions[questionIndex]}</div>
				<div className='pb-4'>
					{/* legendary piece of code  */}
					{options[questionIndex].map((option, index) => {
						return (
							<button
								key={index}
								onClick={() => handleOptionClick}
								className={`w-full py-2 my-2 text-center rounded-lg ${
									selectedOption === option
										? 'bg-green-500 text-white'
										: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
								}`}
								data-value={option}
							>
								{option}
							</button>
						);
					})}
				</div>
				<Button name='Next' handler={incrementQuestionHandler} />
			</div>
			{answers[questionIndex]}
		</div>
	);
}
