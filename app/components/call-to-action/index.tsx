import Button from '@/app/ui/button'
import Form from '@/app/ui/form'
import Input from '@/app/ui/input'
import Container from '../container'

const CallToAction = () => {
	return (
		<Container className="bg-white flex-col">
			<h2 className="font-bold outline-black capitalize text-4xl text-center w-full">
				Join us in making a difference!
			</h2>
			<p>
				Whether you&apos;re passionate about wildlife conservation, seeking a
				unique volunteer opportunity, or simply want to support our cause,
				there&apos;s a place for you at Apollo&apos;s Rescue. Take action today
				and be a part of our mission to provide sanctuary, rehabilitation, and
				love to wolves in need. Together, we can make a lasting impact on the
				lives of these majestic creatures. Join Apollo&apos;s Rescue and be a
				voice for the voiceless.
			</p>
			<Form />
		</Container>
	)
}
export default CallToAction
