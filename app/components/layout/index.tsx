import Footer from '../footer'
import Navbar from '../navbar'

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<div className="relative min-h-screen bg-white dark:bg-black">
				<Navbar logo="logo" />
				{/* Main Content Area */}
				<main className="bg-gray-100">
					<div className="mx-auto">{children}</div>
				</main>
				<Footer />
			</div>
		</>
	)
}
export default Layout
