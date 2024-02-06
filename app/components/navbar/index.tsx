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
								<a
									href="/"
									className="inline-flex h-10 items-center justify-center text-lg font-bold text-gray-800 dark:text-white"
								>
									{logo}
								</a>
							</div>
							{/* Right Side Container */}
							<div className="flex flex-1 items-center justify-end">
								<nav className="flex items-center space-x-1 gap-4">
									<a
										href="#hero-section"
										className="h-10 w-full p-2 text-gray-800 hover:text-[#ff0000] dark:text-white"
										target="_blank"
									>
										About
									</a>
									<a
										href="#"
										className="h-10 w-full p-2 text-gray-800 hover:text-[#4078c8] dark:text-white"
										target="_blank"
									>
										Contact
									</a>
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
