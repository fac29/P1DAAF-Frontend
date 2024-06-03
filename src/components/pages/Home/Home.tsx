import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Dropdown from '../../common/Dropdown/Dropdown';
import { getData, transformData } from '../../../data/getData';
import {
	getCategoryFilterTypes,
	getDifficultyLevels,
} from '../../../utils/helper';
import { CategoryFilterTypes, Difficulty } from '../../../types';
// import { Questions } from '../../../types';
// import { QuestionSlide } from '../../common/Question/QuestionSlide';

function Home() {
	const categories = getCategoryFilterTypes();
	const difficulties = getDifficultyLevels();

	const [category, setCategory] = useState<CategoryFilterTypes>('Favourited');
	const [difficulty, setDifficulty] = useState<Difficulty>('all');
	//const [quizData, setQuizData] = useState({ questions: [], options: [] });
	// console.log('Category selected ' + category);
	// console.log('Difficulty selected ' + difficulty);

	const navigate = useNavigate();
	const handler = () => {
		navigate('/quiz');
	};

	const handleCategoryChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setCategory(event.target.value as CategoryFilterTypes);
	};

	const handleDifficultyChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setDifficulty(event.target.value as Difficulty);
	};
	//rethink this useEffect

	getData(category, difficulty).then((result) => {
		transformData(result);
	});

	return (
		<div className='container mx-auto flex flex-col items-center mt-10 p-5'>
			<h1 className='text-4xl font-bold mb-4 text-white'>Take a Quiz</h1>
			<section className='mb-6 text-gray-400 text-center'>
				<p>This is the main page for the quiz.</p>
			</section>
			<div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6'>
				<Dropdown
					name='Category'
					contentArr={categories}
					handleDropdown={handleCategoryChange}
				/>
				<Dropdown
					name='Difficulty'
					contentArr={difficulties}
					handleDropdown={handleDifficultyChange}
				/>
			</div>
			<Button name='START QUIZ' color='orange' handler={handler} />
			{/* you will eventually move this to thw Quiz page -> still keep the concept of passing from a parent to a child component
			<QuestionSlide
				questions={quizData.questions}
				options={quizData.answers}
			/> */}
		</div>
	);
}

export default Home;
