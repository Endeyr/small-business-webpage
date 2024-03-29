import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Layout from './components/layout'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Apollos Rescue',
	description: 'Animal rescue managed by Apollo, funded by Olympus.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Layout>{children}</Layout>
			</body>
		</html>
	)
}
