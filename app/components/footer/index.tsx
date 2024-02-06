const Footer = () => {
	return (
		<>
			{/* Computer footer */}
			<footer className="bg-green-500 w-full sm:flex gap-3 justify-between items-start p-[50px] hidden">
				<div className="flex flex-col justify-start items-start">
					<h2>Statement</h2>
					<p>Here is some text about the statement</p>
				</div>
				<ul className="flex flex-col justify-start items-start" role="list">
					<li>Product</li>
					<li>Shopify</li>
					<li>Pricing</li>
					<li>Blog</li>
				</ul>
				<ul className="flex flex-col justify-start items-start" role="list">
					<li>Company</li>
					<li>About Us</li>
					<li>Career</li>
				</ul>
				<ul className="flex flex-col justify-start items-start" role="list">
					<li>Support</li>
					<li>Terms</li>
					<li>Privacy</li>
				</ul>
			</footer>
			{/* Mobile Footer */}
		</>
	)
}
export default Footer
