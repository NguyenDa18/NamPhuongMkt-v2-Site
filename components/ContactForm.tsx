import React from 'react'
import {
	Button,
	Checkbox,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Link,
	Stack,
	Image,
	Textarea
} from '@chakra-ui/react'
  
export default function ContactForm() {
	return (
		<Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
			<Flex p={8} flex={1} align={'center'} justify={'center'}>
				<Stack spacing={4} w={'full'} maxW={'md'}>
					<Heading fontSize={'2xl'}>Contact Us</Heading>
					<FormControl id="email">
						<FormLabel>Email address</FormLabel>
						<Input type="email" />
					</FormControl>
					<FormControl id="content">
						<FormLabel>Message</FormLabel>
						<Textarea placeholder="Enter some content" />
					</FormControl>
					<Stack spacing={6}>
						<Button colorScheme={'blue'} variant={'solid'}>
                Submit
						</Button>
					</Stack>
				</Stack>
			</Flex>
			<Flex flex={1}>
				<Image
					alt={'Contact Us Image'}
					objectFit={'cover'}
					src={
						'https://res.cloudinary.com/dnguyen/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1567931907/namphuong/about/np_kids_mm7lrx.jpg'
					}
				/>
			</Flex>
		</Stack>
	)
}