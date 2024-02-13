import { ContentCard } from '@/app/ui/card'
import Container from '../container'

const Services = () => {
	return (
		<Container className="bg-gray-100 flex flex-col w-full justify-evenly items-center">
			<h2 className="font-bold outline-black capitalize text-4xl text-center w-full">
				Services
			</h2>
			<div className="flex flex-col xl:flex-row w-full justify-center items-center gap-4">
				<ContentCard title="Sanctuary and Rehabilitation">
					Providing a safe and nurturing environment for wolves rescued from
					various situations such as abuse, neglect, or displacement, offering
					rehabilitation services to help them heal physically and emotionally.
				</ContentCard>
				<ContentCard title="Medical Care">
					Offering comprehensive veterinary care to ensure the health and
					well-being of the wolves, including routine check-ups, vaccinations,
					and treatment for injuries or illnesses.
				</ContentCard>
				<ContentCard title="Educational Programs">
					Conducting educational tours, workshops, and outreach programs to
					raise awareness about wolf conservation, habitat preservation, and
					responsible stewardship of wildlife.
				</ContentCard>
			</div>
		</Container>
	)
}
export default Services
