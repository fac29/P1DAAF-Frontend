interface Props {
	score: number
}

function Score({ score }: Props) {
	const messages = [
		{ threshold: 10, message: 'So bad, you stink' },
		{ threshold: 20, message: 'Thanks, that was horrible' },
		{ threshold: 30, message: 'You should read something' },
		{ threshold: 55, message: 'About half right, meh' },
		{ threshold: 70, message: 'Not too bad' },
		{ threshold: 85, message: "Well done, I didn't expect this from you" },
		{ threshold: 100, message: 'Perfect! I am sure that you cheated' },
	]

	const getColor = () => {
		if (score <= 33) return 'text-red-500'
		if (score <= 66) return 'text-blue-500'
		return 'text-green-500'
	}

	const progressColor = getColor()

	const getMessage = () => {
		for (let i = 0; i < messages.length; i++) {
			if (score <= messages[i].threshold) {
				return messages[i].message
			}
		}
		return messages[messages.length - 1].message
	}

	const circleRadius = 50
	const circleCircumference = 2 * Math.PI * circleRadius
	const strokeDashoffset =
		circleCircumference - (score / 100) * circleCircumference

	return (
		<div className='flex flex-col justify-center items-center bg-gray-100 p-4 rounded border border-gray-600 w-full'>
			<div className='relative flex items-center justify-center'>
				<svg className='rotate-90 w-28 h-28'>
					<circle
						cx='50%'
						cy='50%'
						r={circleRadius}
						stroke='currentColor'
						strokeWidth='10'
						className='text-gray-600'
						fill='transparent'
					/>
					<circle
						cx='50%'
						cy='50%'
						r={circleRadius}
						stroke='currentColor'
						strokeWidth='10'
						className={progressColor}
						fill='transparent'
						strokeDasharray={circleCircumference}
						strokeDashoffset={strokeDashoffset}
						style={{ transition: 'stroke-dashoffset 0.5s ease' }}
					/>
				</svg>
				<span className='absolute text-gray-700 text-3xl font-bold'>
					{score}
				</span>
			</div>
			<span className='text-gray-500 mt-2 text-center'>{getMessage()}</span>
		</div>
	)
}

export default Score