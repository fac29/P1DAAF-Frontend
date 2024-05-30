import { useState } from 'react';

interface SlideProps {
	title?: string;
	question: string;
	answers: string[];
	feedback?: string;
	onSlideAdvance?(): void;
}



export function QuestionSlide({ title, question, answers }: SlideProps) {
	//initalizing the state
	const [selectedAnswer, setSelectedAnswer] = useState<string>();

	const handleAnswerClick = (answer:string) => {
		setSelectedAnswer(answer);
	};

	return (
		<div className='flex flex-col justify-center items-center h-screen w-screen bg-gray-100'>
			<div className='flex flex-col justify-center items-center w-96 h-auto p-10 border-4 border-gray-300 bg-white rounded-lg shadow-lg'>
				<div className='text-2xl font-bold mb-4'>{title}</div>
				<div className='text-lg mb-6'>{question}</div>
				<div className='w-full'>
					{answers.map((answer, index) => (
						<button
							key={index}
							onClick={() => handleAnswerClick(answer)}
							className={`w-full py-2 my-2 text-center rounded-lg ${
								selectedAnswer === answer
									? 'bg-green-500 text-white'
									: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
							}`}
						>
							{answer}
						</button>
					))}
				</div>
			</div>
		</div>
	);
}
