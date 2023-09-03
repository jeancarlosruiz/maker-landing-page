import Benefits from './components/Benefits/Benefits'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Plans from './components/Plans/Plans'

function App() {
	return (
		<>
			<Header />
			<main className='main'>
				<Hero />
				<Benefits />
				<Plans />
				<Footer />
			</main>
		</>
	)
}

export default App
