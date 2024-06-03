import EditQuestionForm from '../../common/EditQuestionForm/EditQuestionForm.tsx'

interface AddQuestionProps {
	id: number
}

function EditQuestion({id}: AddQuestionProps) {
	return (
		<>
			<EditQuestionForm id={Number (id)} />
		</>
	)
}

export default EditQuestion
