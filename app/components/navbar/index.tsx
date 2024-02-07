import Button from '@/app/ui/button'
import Link from 'next/link'
import Services from '../services/index'

const Navbar = ({ logo }: { logo: string }) => {
	return (
		<>
			{/* Navbar */}
			<header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-black hidden sm:block">
				<div className="flex h-16 items-center p-[50px]">
					<div className="mx-auto w-full space-y-20">
						<div className="flex justify-between">
							{/* Left Side Container */}
							<div className="flex flex-1 items-center justify-start">
								<Link
									href="/"
									className="inline-flex h-10 items-center justify-center text-lg font-bold text-gray-800 dark:text-white hover:text-[#4078c8]"
								>
									{logo}
								</Link>
							</div>
							{/* Right Side Container */}
							<div className="flex flex-1 items-center justify-end">
								<nav className="flex items-center space-x-1 gap-4">
									<Link
										href="/services"
										className="h-10 w-full p-2 text-gray-800 hover:text-[#4078c8] dark:text-white"
									>
										Services
									</Link>
									<Link
										href="/about"
										className="h-10 w-full p-2 text-gray-800 hover:text-[#4078c8] dark:text-white"
									>
										About
									</Link>
									<Link
										href="/contact"
										className="h-10 w-full p-2 text-gray-800 hover:text-[#4078c8] dark:text-white"
									>
										Contact
									</Link>
									<div className="h-13">
										<Button
											className="text-md p-2"
											variant="secondary"
											colors={{
												text: 'text-[#4078c8]',
												hoverBorder: 'hover:border-[#4078c8]',
												hoverBg: 'hover:bg-[#4078c8]',
												focusRing: 'focus:ring-[#4078c8]',
											}}
										>
											Donate
										</Button>
									</div>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</header>
			{/* Mobile Navbar */}
		</>
	)
}
export default Navbar
