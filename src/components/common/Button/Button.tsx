import React from 'react'
interface Props {
	name?: string
	preIcon?: React.ReactNode
	postIcon?: React.ReactNode
	handler?: () => void
	color?: 'blue' | 'red' | 'yellow'
}

function Button({ name, preIcon, postIcon, handler, color = 'blue' }: Props) {
	// Determine the button color, defaulting to blue if no color prop is provided

	const colorVariants = {
    blue: 'bg-blue-500 hover:bg-blue-700 text-white',
    red: 'bg-red-500 hover:bg-red-700 text-white',
    yellow: 'bg-yellow-500 hover:bg-yellow-700 text-black',
    black: 'bg-black hover:bg-gray-800 text-white',
    grey: 'bg-gray-500 hover:bg-gray-700 text-white',
    green: 'bg-green-500 hover:bg-green-700 text-white',
    orange: 'bg-orange-500 hover:bg-orange-700 text-white',
  };

	// Get the appropriate classes for the color
	const classes = colorVariants[color] || colorVariants.blue

	return (
		<button
			className={`${classes} font-bold py-2 px-4 rounded flex items-center focus:outline-none`}
			onClick={handler}
		>
			{preIcon && <span >{preIcon}</span>}
      {name && <span className='mx-2'>{name}</span>}
      {postIcon && <span >{postIcon}</span>}
		</button>
	)
}

export default Button
