import { FaRegEdit } from 'react-icons/fa'
import { FiDelete } from 'react-icons/fi'
import Button from '../Button/Button'

interface Props {
	question: string
}

function EditFormLine({ question }: Props) {
	const handleEdit = () => {
		console.log('Edit clicked')
	}

	const handleDelete = () => {
		console.log('Delete clicked')
	}

	return (
		<div className='flex  justify-between items-center bg-gray-100 p-2 rounded border-b border-gray-600 w-full'>
			<span className='text-gray-700 mr-2 ml-2 justify-self-start'>{question}</span>
			<div className='flex space-x-2'>
				<Button preIcon={<FaRegEdit />} handler={handleEdit} name='Edit' />
				<Button color="red" preIcon={<FiDelete />} handler={handleDelete} name='Delete'/>
			</div>
		</div>
	)
}

export default EditFormLine
