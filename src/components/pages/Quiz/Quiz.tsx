import { QuestionSlide } from '../../common/Question/QuestionSlide';
//import { getData } from '../../../data/getData';

function Quiz() {
	// let arrayOfQuestions = getData();
	// console.log(arrayOfQuestions);
	return (
		<>
			<h1>Quiz component </h1>
			<h1>Quiz component </h1>
			<h1>Quiz component </h1>
			<h1>Quiz component </h1>
			<h1>Quiz component </h1>
			<h1>Quiz component </h1>
			<QuestionSlide
				questions={[
					'What is the chemical symbol for Hydrogen?',
					'When was Princess Diana Born?',
				]}
				options={[
					['hd', 'asd', 'op', 'hkl'],
					['1999', '1900', '3000', '6374'],
				]}
			/>
		</>
	);
}

export default Quiz;
