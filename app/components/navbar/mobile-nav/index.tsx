'use client'

import Button from '@/app/ui/button'
import Link from 'next/link'
import { useState } from 'react'
import { GiWolfHowl } from 'react-icons/gi'

const MobileNav = ({ logo }: { logo: string }) => {
	const [isOpen, setIsOpen] = useState(false)
	const toggle = () => {
		setIsOpen(!isOpen)
	}
	return (
		<div className="sticky top-0 z-50">
			<div className="flex md:hidden justify-between items-center w-full border-b p-2 h-20 bg-white dark:bg-black">
				<Link
					href="/"
					className="inline-flex h-10 items-center justify-center text-lg font-bold text-gray-800 dark:text-white hover:text-[#4078c8]"
				>
					{GiWolfHowl ? <GiWolfHowl size={70} color="#4078c8" /> : logo}
				</Link>
				<div>
					<button
						onClick={toggle}
						className="inline-flex p-3 hover:bg-blue-500 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
			</div>
			<nav
				className="bg-black flex-col items-center justify-center absolute left-0 right-0 top-22 z-50 md:hidden"
				style={{ display: isOpen ? 'flex' : 'none' }}
			>
				<Link
					href="/services"
					className="text-white border-b w-full text-center py-2"
				>
					Services
				</Link>
				<Link
					href="/about"
					className="text-white border-b w-full text-center py-2"
				>
					About
				</Link>
				<Link
					href="/contact"
					className="text-white border-b w-full text-center py-2"
				>
					Contact
				</Link>
				<Link href="#" className="text-white border-b w-full text-center py-2">
					Donate
				</Link>
			</nav>
		</div>
	)
}
export default MobileNav
