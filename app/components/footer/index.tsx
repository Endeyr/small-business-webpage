import Link from 'next/link'
import { GiLetterBomb, GiPhone, GiPin, GiWolfHowl } from 'react-icons/gi'

const Footer = () => {
	return (
		<>
			{/* Computer footer */}
			<footer className="dark:bg-black dark:text-white bg-white text-gray-800 w-full sm:grid sm:grid-cols-4 sm:justify-between sm:items-center gap-3 p-[50px] hidden">
				<div className="flex flex-col justify-start items-start gap-2 w-full h-full">
					<h2 className="font-bold capitalize text-xl">Apollo&apos;s Rescue</h2>
					<p className="w-1/2">
						<GiWolfHowl
							size={35}
							color="#4078c8"
							className="inline-block mr-2"
						/>
						Empowering wolves through compassion and sanctuary.
					</p>
				</div>

				<div className="flex flex-col justify-start items-start gap-2 w-full h-full">
					<h2 className="font-bold capitalize text-xl">Browse</h2>
					<ul className="flex flex-col" role="list">
						<li>
							<Link
								href="/"
								className="w-full text-gray-800 hover:text-[#4078c8] dark:text-white"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href="/services"
								className="w-full text-gray-800 hover:text-[#4078c8] dark:text-white"
							>
								Services
							</Link>
						</li>
						<li>
							<Link
								href="/about"
								className="w-full text-gray-800 hover:text-[#4078c8] dark:text-white"
							>
								About
							</Link>
						</li>
						<li>
							<Link
								href="/contact"
								className="w-full text-gray-800 hover:text-[#4078c8] dark:text-white"
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
				<div className="flex flex-col justify-start items-start gap-2 w-full h-full">
					<h2 className="font-bold capitalize text-xl">Services</h2>
					<ul className="flex flex-col" role="list">
						<li>Sanctuary & Research</li>
						<li>Medical Care</li>
						<li>Education Programs</li>
						<li>Community Engagement</li>
					</ul>
				</div>
				<div className="flex flex-col justify-start items-start gap-2 w-full h-full">
					<h2 className="font-bold capitalize text-xl ">Contact</h2>
					<ul className="flex flex-col" role="list">
						<li className="flex gap-2 justify-start items-center">
							<GiPin /> <span>Mount Olympus, Greece</span>
						</li>
						<li className="flex gap-2 justify-start items-center">
							<GiLetterBomb /> <span>apollo@olympus.org</span>
						</li>
						<li className="flex gap-2 justify-start items-center">
							<GiPhone /> <span>555-555-5555</span>
						</li>
					</ul>
				</div>
			</footer>
			{/* Mobile Footer */}
		</>
	)
}
export default Footer
