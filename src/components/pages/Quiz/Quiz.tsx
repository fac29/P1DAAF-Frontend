import { QuestionSlide } from '../../common/Question/QuestionSlide';
import { getData, transformData } from '../../../data/getData';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Questions } from '../../../types';

function Quiz() {
	const [data, setData] = useState<
		{
			question: string;
			options: string[];
		}[]
	>();

	useEffect(() => {
		getData('History', 'easy')
			.then((data) => transformData(data))
			.then((result) => setData(result));
	}, []); // Empty dependency array means this effect runs once on mount

	return (
		<>
			<h1>Quiz component </h1>
			<h1>Quiz component </h1>
			<h1>Quiz component </h1>
			<h1>Quiz component </h1>
			<h1>Quiz component </h1>
			<h1>Quiz component </h1>
			{Array.isArray(data) && data.length > 0 ? (
				<QuestionSlide
					questions={data?.map((element) => element.question)}
					options={data?.map((element) => element.options)}
				/>
			) : null}
		</>
	);
}

export default Quiz;
