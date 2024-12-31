import React from 'react'

interface HeaderProps {
	title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
	return (
		<header className="bg-blue-500 p-4">
			<h1 className="text-white text-2xl font-bold">{title}</h1>
		</header>
	)
}

export default Header
