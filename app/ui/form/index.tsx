import Button from "../button";
import Input from "../input";

const Form = () => {
  return (
		<form className="xl:grid xl:grid-cols-2 flex flex-col justify-center items-center gap-2">
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
	)
}
export default Form