import React from 'react'
import {
	Container,
	SimpleGrid,
	Image,
	Flex,
	Heading,
	Text,
	Stack,
	Icon,
	useColorModeValue,
	Box,
	Alert,
	AlertDescription,
	AlertIcon,
	AlertTitle
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import { FaClock, FaCreditCard, FaShoppingBasket } from 'react-icons/fa'
import { PhoneIcon } from '@chakra-ui/icons'
interface FeatureProps {
	title: string;
	text: string;
	icon: ReactElement;
}
  
const Feature = ({ title, text, icon }: FeatureProps) => {
	return (
		<Stack>
			<Flex
				w={16}
				h={16}
				align={'center'}
				justify={'center'}
				rounded={'full'}
				bg={useColorModeValue('yellow.400', 'teal.300')}
				mb={1}>
				{icon}
			</Flex>
			<Text fontWeight={600}>{title}</Text>
			<Text color={useColorModeValue('black', 'gray.200')}>{text}</Text>
		</Stack>
	)
}
  
export default function HeroImage() {
	return (
		<Container maxW={'5xl'} py={12}>
			<Alert status='warning' variant='left-accent' py={6}>
				<AlertIcon />
				<AlertTitle>Our store is under construction 🚧</AlertTitle>
				<AlertDescription>We are still open!</AlertDescription>
			</Alert>
			<Flex flex={2}>
				<Image
					rounded={'md'}
					alt={'Market Front'}
					src={
						'https://res.cloudinary.com/dnguyen/image/upload/v1631161662/namphuong/store-newfront_mcwsqn.jpg'
					}
					objectFit={'cover'}
				/>
			</Flex>
			<Stack spacing={6} w={'full'}>
				<Text
					textTransform={'uppercase'}
					color={'blue.400'}
					fontWeight={600}
					fontSize={'sm'}
					bg={useColorModeValue('blue.50', 'blue.900')}
					p={2}
					alignSelf={'flex-start'}
					rounded={'md'}>
              Our Story
				</Text>
				<Heading>Established Since 1997</Heading>
				<Text color={'gray.500'} fontSize={'lg'}>
				We&apos;re a small family operated market serving your needs for Asian goods, vegetables, meat, and seafood. The owner, Phat Nguyen, started it after quitting his previous job to spend more time with his family. We believe that the charm of a small ethnic specialty shop is superior to any department store, connecting time and cultures. We are now one of the longest lasting Asian markets in Portland, OR because of our dedication and determination. Come visit, and you will leave with an interesting story.
				</Text>
				<Box p={4}>
					<SimpleGrid columns={{ base: 2, lg: 4}} spacing={10}>
						<Feature
							icon={<Icon as={FaClock} w={10} h={10} />}
							title={'Open Everyday'}
							text={
								'10:30 AM - 5:00 PM'
							}
						/>
						<Feature
							icon={<Icon as={FaShoppingBasket} w={10} h={10} />}
							title={'Address'}
							text={
								'6834 NE Sandy Blvd. Portland, OR 97213'
							}
						/>
						<Feature
							icon={<Icon as={PhoneIcon} w={10} h={10} />}
							title={'Phone Number'}
							text={
								'(971) 255-1588'
							}
						/>
						<Feature
							icon={<Icon as={FaCreditCard} w={10} h={10} />}
							title={'Accepted'}
							text={
								'EBT, Credit & Debit'
							}
						/>
					</SimpleGrid>
				</Box>
			</Stack>
		</Container>
	)
}