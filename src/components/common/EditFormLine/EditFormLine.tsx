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
		<div className='flex items-center justify-between bg-gray-100 p-4 rounded border-b border-gray-600 mr'>
			<span className='text-gray-700 mr-2'>{question}</span>
			<div className='flex space-x-2'>
				<Button preIcon={<FaRegEdit />} handler={handleEdit} name='Edit' />
				<Button color="red" preIcon={<FiDelete />} handler={handleDelete} name='Delete'/>
			</div>
		</div>
	)
}

export default EditFormLine
