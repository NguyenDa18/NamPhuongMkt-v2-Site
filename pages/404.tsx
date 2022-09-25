import { Box, Stack, Container, Heading } from '@chakra-ui/layout'
import React from 'react'
import Layout from '@/components/Layout'

const NotFound = () => {
	return (
		<Layout title="Page Not Found">
			<Container maxW={'3xl'}>
				<Stack as={Box}
					textAlign={'center'}
					spacing={{ base: 8, md: 14 }}
					py={{ base: 20, md: 36 }}
				>
					<Heading 
						fontWeight={600}
						fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
						lineHeight={'110%'}>
							Page Not Found
					</Heading>
				</Stack>
			</Container>
		</Layout>   
	)
}

export default NotFound