import React, { ReactNode } from 'react'
import Head from 'next/head'

import Navbar from './Navbar'
import Footer from './Footer'
import { Box } from '@chakra-ui/layout'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Page' }: Props) => {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<header>
				<nav>
					<Navbar />
				</nav>
			</header>
			<Box minHeight="100vh" display="flex" flexDir="column">
				{children}
			</Box>
			<Footer />
		</div>
	)
} 

export default Layout
