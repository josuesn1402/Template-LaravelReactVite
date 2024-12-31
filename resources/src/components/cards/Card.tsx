import React from 'react'

const Card: React.FC = () => {
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
			<svg
				className="w-16 h-16 mx-auto mb-4"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M12 4v16m8-8H4"
				/>
			</svg>
			<div className="text-center">
				<h2 className="text-xl font-bold mb-2">Título de la Tarjeta</h2>
				<p className="text-gray-700 text-base">
					Esta es una descripción de la tarjeta. Proporciona información
					adicional sobre el contenido de la tarjeta.
				</p>
			</div>
		</div>
	)
}

export default Card
