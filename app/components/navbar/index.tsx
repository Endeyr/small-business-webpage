import Button from '@/app/ui/button'
import Modal from '@/app/ui/modal'
import Link from 'next/link'
import { GiWolfHowl } from 'react-icons/gi'

// npm i react-icons
const Navbar = ({ logo }: { logo: string }) => {
	return (
		<>
			{/* Navbar */}
			<header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-black hidden md:block">
				<div className="flex h-16 items-center p-[50px]">
					<div className="mx-auto w-full space-y-20">
						<div className="flex justify-between">
							{/* Left Side Container */}
							<div className="flex items-center justify-start gap-4">
								<Link
									href="/"
									className="inline-flex h-10 items-center justify-center text-lg font-bold text-gray-800 dark:text-white hover:text-[#4078c8]"
								>
									{GiWolfHowl ? <GiWolfHowl size={70} color="#4078c8" /> : logo}
								</Link>
							</div>
							{/* Right Side Container */}
							<div className="flex items-center justify-end">
								<nav className="flex items-center space-x-1 gap-4">
									<Link
										href="/services"
										className="h-10 w-full p-2 text-gray-800 hover:text-[#4078c8] dark:text-white rm-text-shadow"
									>
										Services
									</Link>
									<Link
										href="/about"
										className="h-10 w-full p-2 text-gray-800 hover:text-[#4078c8] dark:text-white rm-text-shadow"
									>
										About
									</Link>
									<Link
										href="/contact"
										className="h-10 w-full p-2 text-gray-800 hover:text-[#4078c8] dark:text-white rm-text-shadow"
									>
										Contact
									</Link>
									<div className="h-13">
										<Modal buttonVariant="secondary" />
									</div>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}
export default Navbar
