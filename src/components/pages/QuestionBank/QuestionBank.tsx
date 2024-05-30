import { useNavigate } from 'react-router-dom'
import Button from '../../common/Button/Button'
//import QuestionBankTable from '../../common/QuestionBankTable/QuestionBankTable';
import TestQuestionBankTable from '../../common/QuestionBankTable/Test'
//import Dropdown from "../../common/Dropdown/Dropdown";
//import { getCategoryFilterTypes, getDifficultyLevels } from "../../../utils/helper";

function QuizPage() {
	// const categories = getCategoryFilterTypes();
	// const difficulties = getDifficultyLevels();

	const navigate = useNavigate()
	const handler = () => {
		navigate('/home')
	}

	return (
		<div className='container mx-auto flex flex-col items-center mt-10 p-5'>
			<h1 className='text-4xl font-bold mb-4 text-white'>Question bank</h1>
			<section className='mb-6 text-gray-400 text-center'>
				<p>Create - Edit - Delete questions.</p>
			</section>

			<div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6'>
				<Button name='CREATE QUESTION' color='blue' />
				<TestQuestionBankTable />
				<Button name='BACK' color='orange' handler={handler} />
			</div>
		</div>
	)
}

export default QuizPage
