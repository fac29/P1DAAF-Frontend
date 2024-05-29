import { FaHeart } from 'react-icons/fa'
import { FaHeartBroken } from 'react-icons/fa'

interface Props {
	state: boolean
	onToggle: () => void
}

function FavQuestion({ state, onToggle }: Props) {
	return (
		<div
			onClick={onToggle}
			className={`text-4xl cursor-pointer ${
				state ? 'text-red-500' : 'text-gray-500'
			}`}
		>
			{state ? <FaHeart /> : <FaHeartBroken />}
		</div>
	)
}

export default FavQuestion
