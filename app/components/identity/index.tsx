import IdentityImg from '@/public/images/services/wolf-sanctuary.webp'
import Image from 'next/image'
import Container from '../container'

const Identity = () => {
	return (
		<Container className="bg-white flex-col justify-center gap-2">
			<div className="grid grid-col-3 w-full">
				<Image
					src={IdentityImg.src}
					alt="Five wolves running in the woods"
					width={700}
					height={350}
				/>
				<div className="col-span-2 col-start-2 flex flex-col justify-start items-center gap-2">
					<h2 className="font-bold capitalize text-lg text-center w-full my-2">
						Who are we?
					</h2>
					<p className="px-4">
						We are Apollo&apos;s Rescue, a sanctuary nestled atop Mount Olympus,
						dedicated to providing refuge, rehabilitation, and love to wolves in
						need. Our mission is to empower these majestic creatures through
						compassion and sanctuary, preserving their spirit for generations to
						come.
					</p>
					<p className="px-4">
						At Apollo&apos;s Rescue, we are more than just a sanctuary; we are a
						beacon of hope, a haven for wolves seeking solace, and a voice for
						their protection and conservation. Join us in our mission to make a
						difference in the lives of these incredible animals.
					</p>
					<p className="px-4">
						We are Apollo&apos;s Rescue, where compassion meets purpose, and
						every howl signifies a story of resilience and hope.
					</p>
				</div>
			</div>
		</Container>
	)
}
export default Identity
