import Container from './components/container'
import Layout from './components/layout'
import Input from './ui/input';

export default function Home() {
	return (
		<Layout>
			<Container className="bg-blue-500" id="hero-section">
				Hero Section - big background image, heading, paragraph, button
			</Container>
			<Container className="bg-red-500">
				3 Key Services / Products ie What You Do
			</Container>
			<Container className="bg-blue-500">Who You Are</Container>
			<Container className="bg-red-500">
				Testimonials / Reviews / Case Studies, 1 to 4 different ones
			</Container>
			<Container className="bg-blue-500">
				Call to Action form / login / register
				<Input />
			</Container>
		</Layout>
	)
}
