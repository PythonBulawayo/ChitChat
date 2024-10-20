import React from 'react'

const Button = ({children, onClick}) => {
  return (
		<button
        onClick={onClick}
			type="button"
			className="text-red-700  hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-1 text-center me-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
		>
			{children}
		</button>
	);
}

export default Button
