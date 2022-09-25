import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import HeroPage from '@/components/HeroPage'

const IndexPage = () => {
	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>
			<Layout title="Home">
				<HeroPage />
			</Layout>
		</>
	)	
} 

export default IndexPage
