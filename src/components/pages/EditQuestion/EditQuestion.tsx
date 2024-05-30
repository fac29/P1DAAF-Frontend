import EditQuestionForm from '../../common/EditQuestionForm/EditQuestionForm.tsx'

interface AddQuestionProps {
	id: number
}

function AddQuestion({ id }: AddQuestionProps) {
	return (
		<>
			<EditQuestionForm id={id} />
		</>
	)
}

export default AddQuestion
