import Button from '@/app/ui/button'
import heroBg from '@/public/images/hero/hero-background.webp'
import Container from '../container'

const Hero = () => {
	return (
		<Container
			className="bg-no-repeat bg-cover bg-center dark:text-white flex flex-col justify-start items-start"
			style={{ backgroundImage: 'url(' + heroBg.src + ')' }}
			id="hero-section"
		>
			<div className="w-1/2 h-full flex flex-col justify-between gap-4 items-start">
				<h2 className="font-bold outline-black capitalize text-4xl text-center w-full my-4 text-yellow-200">
					Welcome to Apollo&apos;s Rescue
				</h2>
				<p className="font-semibold text-yellow-200">
					At Apollo&apos;s Rescue, we believe in the power of compassion to
					transform lives. Nestled atop the majestic Mount Olympus, our
					sanctuary stands as a beacon of hope for wolves in need. From those
					scarred by adversity to those seeking solace, we offer refuge to every
					soul that crosses our path.
				</p>
				<p className="font-semibold text-yellow-200">
					With a commitment to their well-being etched in our hearts, we provide
					more than just shelter; we offer healing, love, and a second chance at
					life. Join us in our mission to protect these majestic creatures, as
					we strive to preserve their spirit for generations to come.
				</p>
				<p className="font-semibold text-yellow-200">
					Step into the realm of Apollo&apos;s Rescue, where every howl echoes
					with resilience, and every paw print tells a story of survival.
					Together, let us embark on a journey of compassion, understanding, and
					unwavering dedication to our furry friends. Welcome to our sanctuary.
					Welcome to Apollo&apos;s Rescue. Help us help them.
				</p>
				<Button
					className="text-md p-2 mt-2"
					variant="primary"
					colors={{
						bg: 'bg-[#4078c8]',
						hoverBg: 'hover:bg-[#4078c8]',
						focusRing: 'focus:ring-[#4078c8]',
					}}
				>
					Donate
				</Button>
			</div>
		</Container>
	)
}
export default Hero
