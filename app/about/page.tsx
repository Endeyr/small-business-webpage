import AboutImg from '@/public/images/about/wolf-about.webp'
import Image from 'next/image'
import Link from 'next/link'
import Container from '../components/container'

const AboutPage = () => {
	return (
		<Container className="flex-col justify-start">
			<h2 className="font-bold capitalize text-xl text-center w-full">
				About Us
			</h2>
			<div className="xl:grid xl:grid-cols-2 gap-4 justify-center items-start">
				<div className="mt-2 hidden xl:block">
					<Image
						src={AboutImg.src}
						alt=""
						width={1200}
						height={630}
						className="hidden xl:block"
					/>
				</div>
				<div className="flex flex-col gap-2 justify-start items-start">
					<p>
						Welcome to Apollo&apos;s Rescue, a haven for wolves in need of
						refuge and care. Founded and operated by the Greek god Apollo
						himself, our sanctuary is dedicated to providing a safe and loving
						environment for wolves who have faced hardship or abandonment. With
						a deep-rooted commitment to animal welfare, Apollo&apos;s Rescue
						offers rehabilitation, medical attention, and lifelong sanctuary to
						these majestic creatures.
					</p>
					<p>
						Every wolf at Apollo&apos;s Rescue receives individualized care and
						attention, ensuring their physical and emotional well-being is
						prioritized. Through education and advocacy, we strive to raise
						awareness about the importance of preserving wolf populations and
						their natural habitats.
					</p>
					<p>
						Join us in our mission to protect and nurture these incredible
						animals. Whether you&apos;re interested in volunteering, donating,
						or simply spreading the word, your support makes a tangible
						difference in the lives of the wolves we serve.
					</p>
					<p>
						<Link className="text-blue-500" href="#">
							Take action today
						</Link>{' '}
						and become a part of Apollo&apos;s Rescue family. Together, we can
						make a lasting impact on the lives of wolves in need.
					</p>
				</div>
			</div>
		</Container>
	)
}
export default AboutPage
