import Container from '../components/container'
import Button from '../ui/button'
import Input from '../ui/input'

const ContactPage = () => {
	return (
		<Container>
			<div>
				<h2 className="font-bold capitalize text-xl text-center w-full mb-4">
					Contact Apollo&apos;s Rescue
				</h2>
				<div className="flex flex-col justify-evenly gap-4">
					<div>
						<h3 className="font-bold capitalize text-lg text-center w-full mb-4">
							Visit Us Today
						</h3>
						<div className="grid grid-cols-2 mb-4">
							<div className="flex flex-col justify-evenly items-start">
								<p>
									Visit Us: <span>Mount Olympus, Greece</span>
								</p>
								<p>
									Hours of Operation: <span>Open 7 days a week</span>
								</p>
							</div>
							<div className="flex flex-col justify-evenly items-start">
								<p>
									Experience the magic of Apollo&apos;s Rescue firsthand by
									scheduling a visit to our sanctuary. Contact us to arrange a
									tour and witness the beauty of wolves living in harmony with
									nature.
								</p>
								<p>
									Thank you for your interest in Apollo&apos;s Rescue. We look
									forward to hearing from you and working together to support
									these magnificent creatures.
								</p>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-2">
						<div>
							<h3 className="font-bold capitalize text-lg text-center w-full mb-4">
								Contact Information
							</h3>
							<p>
								Phone: <span>555-555-5555</span>
							</p>
							<p>
								Email: <span>apollo@olympus.org</span>
							</p>
						</div>
						<div>
							<h3 className="font-bold capitalize text-lg text-center w-full mb-4">
								Connect on Social Media
							</h3>
							<p>Facebook</p>
							<p>Instagram</p>
							<p>Twitter</p>
						</div>
					</div>
					<div className="flex flex-col gap-2 justify-center items-center">
						<h3 className="font-bold capitalize text-lg text-center w-full mb-4">
							Get Involved
						</h3>
						{/* Contact Form */}
						<h3 className="text-center font-bold">Contact Form</h3>
						<form className="grid grid-cols-2 justify-center items-center gap-2">
							<Input
								name="first name"
								label="First name"
								description="Enter your first name."
								placeholder="John"
							/>
							<Input
								name="last name"
								label="Last name"
								description="Enter your first name."
								placeholder="Smith"
							/>
							<Input
								name="phone"
								label="Phone number"
								description="Enter your phone number."
								placeholder="555-555-5555"
							/>
							<Input
								name="email"
								label="Email"
								description="Enter your email."
								placeholder="johnsmith@email.com"
							/>
							<div className="w-full space-y-3 col-span-2 mb-2">
								<label
									htmlFor="message"
									className="mb-2 block text-sm font-medium"
								>
									Message
								</label>
								<textarea
									rows={4}
									cols={100}
									className="block w-full rounded-md border-gray-200 px-4 py-4 text-sm focus:border-emerald-500 focus:ring-emerald-500 disabled:pointer-events-none disabled:opacity-50"
									name="message"
									placeholder="I am reaching out to volunteer. These are my available times."
								></textarea>
								<p className="mt-2 text-sm text-gray-500">
									Enter your message.
								</p>
							</div>
							<Button className="col-start-2">Submit</Button>
						</form>
						<p>
							Interested in volunteering your time or making a donation to
							support our cause? We&apos;d love to hear from you! Reach out via
							phone, email, or the contact form, and one of our team members
							will be in touch with more information on how you can get
							involved.
						</p>
					</div>
				</div>
			</div>
		</Container>
	)
}
export default ContactPage
