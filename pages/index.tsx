import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import HeroPage from '../components/HeroPage'
import { Flex, Heading, Input, Button, useColorModeValue, Box } from '@chakra-ui/react'

const IndexPage = () => {
	const formBackground = useColorModeValue('gray.100', 'gray.700')
	return (
		<Layout title="Home">
			{/* <Flex height="100vh" alignItems="center" justifyContent="center">
				<Flex direction="column" background={formBackground} p={12} rounded={6}>
					<Heading mb={6}>Log in</Heading>
					<Input placeholder="email@fakemail.com" variant="filled" />
					<Input placeholder="Enter a password" variant="filled" />
					<Button mb={6} colorScheme="red">
					Log in
					</Button>
				</Flex>
			</Flex> */}
			<HeroPage />
		</Layout>
	)	
} 

export default IndexPage
