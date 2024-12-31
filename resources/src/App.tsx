import React from 'react'
import Header from './layout/Header'
import NavBar from './layout/NavBar'
import Footer from './layout/Footer'
import Card from './components/cards/Card'

function App() {
	return (
		<>
			<Header title="Titulo" />
			<NavBar />
			<main className="max-w-screen-xl mx-auto p-48">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					<Card />
					<Card />
					<Card />
				</div>
			</main>
			<Footer />
		</>
	)
}

export default App
