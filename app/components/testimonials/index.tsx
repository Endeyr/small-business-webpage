import { ContentCard } from '@/app/ui/card'
import Container from '../container'

const Testimonials = () => {
	return (
		<Container className="bg-gray-100 flex flex-col w-full justify-evenly items-center">
			<h2 className="font-bold outline-black capitalize text-4xl text-center w-full">
				Testimonials
			</h2>
			<div className="flex flex-col xl:flex-row gap-4 w-full justify-center items-center">
				<ContentCard title="5 out of 5 stars!" footer="- Zeus">
					&quot;Visiting Apollo&apos;s Rescue was an unforgettable experience!
					The dedication of the staff to the well-being of the wolves is truly
					inspiring. It&apos;s heartwarming to see these majestic creatures
					thriving in such a loving environment. A must-visit for anyone
					passionate about wildlife conservation.&quot;
				</ContentCard>
				<ContentCard title="Saved my wolf's life!" footer="- Poseidon">
					&quot;I had the pleasure of volunteering at Apollo&apos;s Rescue, and
					it was an incredibly rewarding experience. The team&apos;s commitment
					to providing top-notch care for the wolves is unmatched. I witnessed
					firsthand the positive impact of their rehabilitation programs.
					Apollo&apos;s Rescue is making a real difference in the lives of these
					animals.&quot;
				</ContentCard>
				<ContentCard title="Great Experience!" footer="- Ares">
					&quot;Apollo&apos;s Rescue is a true gem in the world of animal
					sanctuaries. The staff&apos;s expertise and genuine love for the
					wolves shine through in every aspect of their work. The sanctuary
					itself is beautifully maintained, providing a safe and enriching
					environment for its residents. I left feeling inspired and grateful
					for the opportunity to support such a worthy cause.&quot;
				</ContentCard>
				<ContentCard title="Fun and Educational!" footer="- Percy">
					&quot;Words cannot express how grateful I am for Apollo&apos;s Rescue.
					After visiting the sanctuary, I gained a newfound appreciation for
					wolves and their importance in the ecosystem. The dedication of the
					team to their well-being is evident in every interaction.
					Apollo&apos;s Rescue is a beacon of hope for these incredible animals,
					and I&apos;m proud to support their mission.&quot;
				</ContentCard>
			</div>
		</Container>
	)
}
export default Testimonials
