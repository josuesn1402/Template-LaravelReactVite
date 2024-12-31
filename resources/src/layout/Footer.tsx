import React from 'react'

const Footer: React.FC = () => {
	return (
		<footer className="bg-gray-800 text-white py-4">
			<div className="container mx-auto text-center">
				<p className="text-sm">
					&copy; 2023 Tu Empresa. Todos los derechos reservados.
				</p>
				<div className="mt-2">
					<a href="#" className="text-gray-400 hover:text-white mx-2">
						Política de Privacidad
					</a>
					<a href="#" className="text-gray-400 hover:text-white mx-2">
						Términos de Servicio
					</a>
					<a href="#" className="text-gray-400 hover:text-white mx-2">
						Contáctanos
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
