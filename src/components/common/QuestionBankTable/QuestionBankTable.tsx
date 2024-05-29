import EditFormLine from '../EditFormLine/EditFormLine'

interface Props {
	questions: string
}

function QuestionBankTable({ question }: Props) {


	return (
		<div className='flex items-center justify-between bg-gray-100 p-4 rounded border-b border-gray-600 mr'>
			<span className='text-gray-700 mr-2'>{question}</span>
			<div className='flex space-x-2'>
				<Button preIcon={<FaRegEdit />} handler={handleEdit} name='Edit' />
				<Button color="red" preIcon={<FiDelete />} handler={handleDelete} name='Delete'/>
			</div>
		</div>
	)
}

export default QuestionBankTable