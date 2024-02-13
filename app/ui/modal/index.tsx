'use client'

import { useState } from 'react'
import { FaRegWindowClose } from 'react-icons/fa'
import Button from '../button'

const Modal = ({
	buttonVariant,
}: {
	buttonVariant: 'primary' | 'secondary'
}) => {
	const [showModal, setShowModal] = useState(false)

	let button
	if (buttonVariant === 'primary') {
		button = (
			<Button
				onClick={() => setShowModal(!showModal)}
				className="text-md p-2 mt-2"
				variant="primary"
				colors={{
					bg: 'bg-[#4078c8]',
					hoverBg: 'hover:bg-[#4078c8]',
					focusRing: 'focus:ring-[#4078c8]',
				}}
			>
				Donate
			</Button>
		)
	} else if (buttonVariant === 'secondary') {
		button = (
			<Button
				onClick={() => setShowModal(!showModal)}
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
		)
	}
	return (
		<>
			{button}
			{showModal && (
				<>
					<div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto my-6 mx-auto max-w-3xl">
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								<div className="flex items-center justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
									<h3 className="text-3xl font=semibold">Donate</h3>
									<button
										className="text-center"
										onClick={() => setShowModal(false)}
									>
										<FaRegWindowClose size={34} />
									</button>
								</div>
								<div className="relative p-6 flex-auto">
									<form
										onSubmit={() => setShowModal(false)}
										className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full"
									>
										<p>
											This is where you&apos;d connect to stripe or paypal, ect
										</p>
										<label className="block text-black text-sm font-bold mb-1">
											First Name
										</label>
										<input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
										<label className="block text-black text-sm font-bold mb-1">
											Last Name
										</label>
										<input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
										<label className="block text-black text-sm font-bold mb-1">
											Amount
										</label>
										<input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
									</form>
								</div>
								<div className="flex items-center justify-end gap-6 p-6 border-t border-solid border-blueGray-200 rounded-b">
									<Button
										onClick={() => setShowModal(false)}
										className="text-md p-2 mt-2"
										variant="tertiary"
									>
										Close
									</Button>
									<Button
										onClick={() => setShowModal(false)}
										className="text-md p-2 mt-2"
										variant="primary"
										colors={{
											bg: 'bg-[#4078c8]',
											hoverBg: 'hover:bg-[#4078c8]',
											focusRing: 'focus:ring-[#4078c8]',
										}}
									>
										Submit
									</Button>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	)
}
export default Modal
