import Button from '@/app/ui/button'
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
			<form className="grid grid-cols-2 justify-center items-center gap-2">
				<Input
					type="text"
					name="first name"
					label="First name"
					placeholder="John"
				/>
				<Input
					type="text"
					name="last name"
					label="Last name"
					placeholder="Smith"
				/>
				<Input
					type="tel"
					name="phone"
					label="Phone number"
					placeholder="555-555-5555"
				/>
				<Input
					type="email"
					name="email"
					label="Email"
					placeholder="johnsmith@email.com"
				/>
				<div className="w-full space-y-3 col-span-2 mb-2">
					<label htmlFor="message" className="mb-2 block text-sm font-medium">
						Message
					</label>
					<textarea
						rows={4}
						cols={100}
						className="block w-full rounded-md border-gray-200 px-4 py-4 text-sm focus:border-[#4078c8] focus:ring-[#4078c8] disabled:pointer-events-none disabled:opacity-50"
						name="message"
						placeholder="I am reaching out to volunteer. These are my available times."
					></textarea>
				</div>
				<Button className="col-start-2">Submit</Button>
			</form>
		</Container>
	)
}
export default CallToAction
