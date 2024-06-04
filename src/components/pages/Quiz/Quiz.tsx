import { QuestionSlide } from '../../common/Question/QuestionSlide';
import { getData, transformData } from '../../../data/getData';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Questions } from '../../../types';
import { useParams } from 'react-router-dom';

function Quiz() {
	const { category, difficulty } = useParams<{
		category: string;
		difficulty: string;
	}>();

	const [data, setData] = useState<
		{
			question: string;
			options: string[];
		}[]
	>();

	useEffect(() => {
		if (category && difficulty) {
			getData(category, difficulty)
				.then((data) => transformData(data))
				.then((result) => setData(result));
		}
	}, [category, difficulty]); // Dependency array includes category and difficulty

	return (
		<>
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
