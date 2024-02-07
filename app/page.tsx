import CallToAction from './components/call-to-action'
import Hero from './components/hero'
import Identity from './components/identity'
import Layout from './components/layout'
import Services from './components/services'
import Testimonials from './components/testimonials'

export default function Home() {
	return (
		<>
			<Hero />
			<Services />
			<Identity />
			<Testimonials />
			<CallToAction />
		</>
	)
}
