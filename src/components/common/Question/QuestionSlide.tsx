import { useState } from 'react';
import { Button } from '../Button/Button';
interface SlideProps {
	questions: string[];
	answers: string[][];
	feedback?: string;
	onSlideAdvance?(): void;
}

export function QuestionSlide({ questions, answers }: SlideProps) {
	//initalizing the state
	const [selectedAnswer, setSelectedAnswer] = useState<string>();
	const [currentQuestion, setCurrentQuestion] = useState(1);

	const [questionIndex, setQuestionIndex] = useState(0);

	const handleAnswerClick = (answer: string) => {
		setSelectedAnswer(answer);
	};
	const incrementQuestionHandler = () => {
		setCurrentQuestion(currentQuestion + 1);
		setQuestionIndex(questionIndex + 1);
	};

	return (
		<div className='flex flex-col justify-center items-center h-screen w-screen bg-gray-100'>
			<div className='flex flex-col justify-center items-center w-96 h-auto p-10 border-4 border-gray-300 bg-white rounded-lg shadow-lg'>
				<div className='text-2xl font-bold mb-4'>{currentQuestion}</div>
				<div className='text-lg mb-6'>{questions[questionIndex]}</div>
				<div>
					{/* legendary piece of code  */}
					{answers[questionIndex].map((option, index) => {
						return (
							<button
								key={index}
								onClick={() => handleAnswerClick(option)}
								className={`w-full py-2 my-2 text-center rounded-lg ${
									selectedAnswer === option
										? 'bg-green-500 text-white'
										: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
								}`}
							>
								{option}
							</button>
						);
					})}
				</div>
			</div>
			<Button name='Next' handler={incrementQuestionHandler} />
		</div>
	);
}
