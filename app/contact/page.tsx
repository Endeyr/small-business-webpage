import Link from 'next/link'
import { FaFacebook, FaInstagram, FaSquareXTwitter } from 'react-icons/fa6'
import Container from '../components/container'
import Button from '../ui/button'
import Input from '../ui/input'

const ContactPage = () => {
	return (
		<Container className="flex-col md:space-y-5">
			<h2 className="font-bold capitalize text-xl text-center w-full">
				Contact Us
			</h2>
			<div className="flex flex-col justify-evenly gap-4">
				<div className="flex flex-col gap-2 justify-center items-center">
					{/* Contact Form */}
					<p>
						Interested in volunteering your time or making a donation to support
						our cause? We&apos;d love to hear from you! Reach out via phone,
						email, or the contact form, and one of our team members will be in
						touch with more information on how you can get involved.
					</p>
					<h3 className="text-center font-bold">Contact Form</h3>
					<form className="grid grid-cols-2 justify-center items-center gap-2">
						<Input name="first name" label="First name" placeholder="John" />
						<Input name="last name" label="Last name" placeholder="Smith" />
						<Input
							name="phone"
							label="Phone number"
							placeholder="555-555-5555"
						/>
						<Input
							name="email"
							label="Email"
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
						</div>
						<Button className="col-start-2">Submit</Button>
					</form>
				</div>
				<div>
					<h3 className="font-bold capitalize text-lg text-center w-full mb-4">
						Visit Us Today
					</h3>
					<div className="flex flex-col justify-evenly items-center">
						<p className="flex w-1/4 justify-between">
							Visit Us:
							<span>Mount Olympus, Greece</span>
						</p>
						<p className="flex w-1/4 justify-between">
							Hours of Operation: <span>Open 7 days a week</span>
						</p>
						<p className="flex w-1/4 justify-between">
							Phone: <span>555-555-5555</span>
						</p>
						<p className="flex w-1/4 justify-between">
							Email: <span>apollo@olympus.org</span>
						</p>
						<div className="flex w-1/4 justify-center items-center gap-4 mt-2">
							<Link href="#">
								<FaFacebook size={35} />
							</Link>
							<Link href="#">
								<FaInstagram size={35} />
							</Link>
							<Link href="#">
								<FaSquareXTwitter size={35} />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Container>
	)
}
export default ContactPage
