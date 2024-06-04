import { FaRegEdit } from 'react-icons/fa';
import { FiDelete } from 'react-icons/fi';
import Button from '../Button/Button';

interface Props {
  question: {
    id: number;
    question: string;
  };
  onDelete: () => void;
  onEdit: () => void;
}

function EditFormLine({ question, onDelete, onEdit }: Props) {
 

  return (
    <div className='flex justify-between items-center bg-gray-100 p-2 rounded border-b border-gray-600 w-full'>
      <span className='text-gray-700 mr-2 ml-2 justify-self-start'>{question.question}</span>
      <div className='flex space-x-2'>
        <Button preIcon={<FaRegEdit />} handler={onEdit} name='Edit' />
        <Button color="red" preIcon={<FiDelete />} handler={onDelete} name='Delete' />
      </div>
    </div>
  );
}

export default EditFormLine;
