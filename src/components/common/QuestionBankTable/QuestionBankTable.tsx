import EditFormLine from '../EditFormLine/EditFormLine'
import { Question, Questions } from '../../../types'

interface QuestionBankTableProps {
	questions: Questions
}

function QuestionBankTable({ questions }: QuestionBankTableProps) {
	return (
		<div className='flex flex-col rounded border-b border-gray-600 mr'>
			{questions.map((question: Question) => (
				<EditFormLine key={question.id} question={question.question} />
			))}
		</div>
	)
}

export default QuestionBankTable
