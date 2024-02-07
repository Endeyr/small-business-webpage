import heroBg from '@/public/hero-background.webp'
import Container from '../container'

const Hero = () => {
	return (
		<Container
			className="bg-no-repeat bg-cover dark:text-white"
			style={{ backgroundImage: 'url(' + heroBg.src + ')' }}
			id="hero-section"
		>
			Hero Section - big background image, heading, paragraph, button
		</Container>
	)
}
export default Hero
