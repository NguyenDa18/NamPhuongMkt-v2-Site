import React from 'react'
import {
	Box,
	Tabs, TabList, TabPanels, Tab, TabPanel,
	Flex,
	Icon,
	SimpleGrid,
	useColorModeValue,
	Container,
	VStack,
	Text,
	Heading
} from '@chakra-ui/react'
import { FaFacebookF, FaGoogle, FaYelp } from 'react-icons/fa'
import { Review } from '../interfaces'
import { facebookReviews } from '../data/facebookReviews'
import { googleReviews } from '../data/googleReviews'
import { yelpReviews } from '../data/yelpReviews'
import { StarIcon } from '@chakra-ui/icons'
  
const TestimonialCard = (props: Review) => {
	const { text, author, stars } = props
	return (
		<Flex
			boxShadow={'lg'}
			maxW={'500px'}
			direction={{ base: 'column-reverse', md: 'row' }}
			width={'full'}
			rounded={'xl'}
			p={10}
			justifyContent={'space-between'}
			position={'relative'}
			bg={useColorModeValue('white', 'gray.700')}>
			<VStack align={'top'}>
				<Box color={useColorModeValue('red', 'teal')} px={2} alignItems='center'>
					{[...Array(stars).keys()].map(i => (
						<Icon key={i} as={StarIcon} />
					))}
				</Box>
				<VStack align={'start'}>
					<Text alignContent='center' fontWeight={600}>{text}</Text>
					<Text color={'gray.600'}>{author}</Text>
				</VStack>
			</VStack>
		</Flex>
		
	)
}

const ReviewGrid = (props: { reviews: Review[], brand: string }) => { 
	return (
		<>
			<Heading>From {props.brand}</Heading>
			<SimpleGrid
				columns={{ base: 1, xl: 2 }}
				spacing={'20'}
				mt={16}
				mx={'auto'}>
				{props.reviews.map((cardInfo, index) => (
					<TestimonialCard key={index} {...cardInfo} />
				))}
			</SimpleGrid>
		</>
	)
}
  
export default function TestimonialQuotes() {
	return (
		<Container maxW={'6xl'}>
			<Flex
				textAlign={'center'}
				pt={90}
				justifyContent={'center'}
				direction={'column'}
				width={'full'}>
				<Tabs isFitted variant="enclosed">
					<TabList mb="1em">
						<Tab>
							<FaGoogle />
						</Tab>
						<Tab>
							<FaYelp />
						</Tab>
						<Tab>
							<FaFacebookF />
						</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<ReviewGrid reviews={googleReviews.sort((a, b) => b.text.length - a.text.length)} brand={'Google'} />
						</TabPanel>
						<TabPanel>
							<ReviewGrid reviews={yelpReviews.sort((a, b) => b.text.length - a.text.length)} brand={'Yelp'} />
						</TabPanel>
						<TabPanel>
							<ReviewGrid reviews={facebookReviews.sort((a, b) => b.text.length - a.text.length)} brand={'Facebook'} />
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Flex>
		</Container>
	)
}