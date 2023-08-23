import Benefits from './components/Benefits/Benefits'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'

function App() {
	return (
		<>
			<Header />
			<main className='main'>
				<Hero />
				<Benefits />
			</main>
		</>
	)
}

export default App
