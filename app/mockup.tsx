// This is where I mocked up how I want to format the page
export default function Home() {
	return (
		<>
			<nav className="bg-green-500 w-full flex gap-3 justify-between items-center p-[50px]">
				<div>Logo</div>
				<div>Nav Links</div>
				<div>Call to Action Button</div>
			</nav>
			<main className="bg-gray-500 flex flex-col items-center justify-start">
				<div className="bg-blue-500 flex w-full min-h-screen items-center justify-center  p-[50px]">
					Hero Section - big background image, heading, paragraph, button
				</div>
				<div className="bg-red-500 flex w-full min-h-screen items-center justify-center p-[50px]">
					3 Key Services / Products ie What You Do
				</div>
				<div className="bg-blue-500 flex w-full min-h-screen items-center justify-center p-[50px]">
					Who You Are
				</div>
				<div className="bg-red-500 flex w-full min-h-screen items-center justify-center p-[50px]">
					Testimonials / Reviews / Case Studies, 1 to 4 different ones
				</div>
				<div className="bg-blue-500 flex w-full min-h-screen items-center justify-center p-[50px]">
					Call to Action form / login / register
				</div>
			</main>
			<nav className="bg-green-500 w-full flex gap-3 justify-between items-start p-[50px]">
				<div className="flex flex-col justify-start items-start">
					<h2>Statement</h2>
					<p>Here is some text about the statement</p>
				</div>
				<ul className="flex flex-col justify-start items-start">
					<li>Product</li>
					<li>Shopify</li>
					<li>Pricing</li>
					<li>Blog</li>
				</ul>
				<ul className="flex flex-col justify-start items-start">
					<li>Company</li>
					<li>About Us</li>
					<li>Career</li>
				</ul>
				<ul className="flex flex-col justify-start items-start">
					<li>Support</li>
					<li>Terms</li>
					<li>Privacy</li>
				</ul>
			</nav>
		</>
	)
}
