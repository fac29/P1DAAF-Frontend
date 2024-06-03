import { useParams } from 'react-router-dom';
import EditQuestionForm from '../../common/EditQuestionForm/EditQuestionForm';

const EditQuestion = () => {
  const { id } = useParams<{ id: string }>(); // Use useParams to get the id from the URL

  return <EditQuestionForm id={Number(id)} />;
};

export default EditQuestion;
