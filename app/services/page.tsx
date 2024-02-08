import WolfAdoption from '@/public/images/services/wolf-adoption.webp'
import WolfAdvocation from '@/public/images/services/wolf-advocation.webp'
import WolfBehavioral from '@/public/images/services/wolf-behavioral.webp'
import WolfCommunity from '@/public/images/services/wolf-community.webp'
import WolfEducation from '@/public/images/services/wolf-education.webp'
import WolfMedical from '@/public/images/services/wolf-medical.webp'
import WolfResearch from '@/public/images/services/wolf-research.webp'
import WolfSanctuary from '@/public/images/services/wolf-sanctuary.webp'
import Container from '../components/container'
import Service from './service'

const ServicesPage = () => {
	return (
		<Container className="flex-col justify-start gap-2">
			<h2 className="font-bold capitalize text-xl text-center w-full">
				Our Services
			</h2>
			{/* Content */}
			<div className="grid grid-col-3 w-full min-h-60 bg-gray-300">
				<Service
					title="Sanctuary and Rehabilitation"
					paragraph="Providing a safe and nurturing environment for wolves rescued from
						various situations such as abuse, neglect, or displacement, offering
						rehabilitation services to help them heal physically and
						emotionally."
					imgSrc={WolfSanctuary.src}
					imgAlt="Seven wolves running in a snowy forest."
					imgSide="left"
				/>
			</div>
			<div className="grid grid-col-3 w-full min-h-60 bg-gray-200">
				<Service
					title="Medical Care"
					paragraph="Offering comprehensive veterinary care to ensure the health and well-being of the wolves, including routine check-ups, vaccinations, and treatment for injuries or illnesses."
					imgSrc={WolfMedical.src}
					imgAlt="Five doctors standing next to an operating table."
					imgSide="right"
				/>
			</div>
			<div className="grid grid-col-3 w-full min-h-60 bg-gray-300">
				<Service
					title="Behavioral Enrichment"
					paragraph="Implementing enrichment programs and activities to stimulate the wolves mentally and physically, promoting natural behaviors and reducing stress in captivity."
					imgSrc={WolfBehavioral.src}
					imgAlt="Two wolf pups sitting."
					imgSide="left"
				/>
			</div>
			<div className="grid grid-col-3 w-full min-h-60 bg-gray-200">
				<Service
					title="Educational Programs"
					paragraph="Conducting educational tours, workshops, and outreach programs to raise awareness about wolf conservation, habitat preservation, and responsible stewardship of wildlife."
					imgSrc={WolfEducation.src}
					imgAlt="People laughing over a computer screen."
					imgSide="right"
				/>
			</div>
			<div className="grid grid-col-3 w-full min-h-60 bg-gray-300">
				<Service
					title="Adoption and Placement"
					paragraph="Facilitating the adoption or placement of wolves deemed suitable for relocation to accredited sanctuaries, wildlife reserves, or educational facilities that meet their specific needs."
					imgSrc={WolfAdoption.src}
					imgAlt="A mother wolf and her pup in the woods."
					imgSide="left"
				/>
			</div>
			<div className="grid grid-col-3 w-full min-h-60 bg-gray-200">
				<Service
					title="Advocacy and Conservation"
					paragraph="Advocating for the protection and conservation of wolves in the wild, partnering with conservation organizations, and supporting initiatives aimed at restoring and preserving their natural habitats."
					imgSrc={WolfAdvocation.src}
					imgAlt="A bucket and a mask on the beech in front of the ocean."
					imgSide="right"
				/>
			</div>
			<div className="grid grid-col-3 w-full min-h-60 bg-gray-300">
				<Service
					title="Research and Collaboration"
					paragraph="Collaborating with researchers, biologists, and wildlife experts to contribute valuable data and insights into wolf behavior, ecology, and conservation efforts."
					imgSrc={WolfResearch.src}
					imgAlt="Glasses sitting on a notepad next to a pen."
					imgSide="left"
				/>
			</div>
			<div className="grid grid-col-3 w-full min-h-60 bg-gray-200">
				<Service
					title="Community Engagement"
					paragraph="Engaging with the local community through volunteer opportunities, fundraising events, and partnerships with schools and community organizations to foster a sense of stewardship and appreciation for wolves and wildlife conservation."
					imgSrc={WolfCommunity.src}
					imgAlt="A sign that says community is strength."
					imgSide="right"
				/>
			</div>
		</Container>
	)
}
export default ServicesPage
