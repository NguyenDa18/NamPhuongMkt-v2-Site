import React from 'react'
import {
	Box,
	chakra,
	Container,
	Stack,
	Text,
	useColorModeValue,
	VisuallyHidden,
} from '@chakra-ui/react'
import { FaFacebookF, FaYelp, FaGoogle } from 'react-icons/fa'
import { ReactNode } from 'react'
  
const SocialButton = ({
	children,
	label,
	href,
}: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
	return (
		<chakra.button
			bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
			rounded={'full'}
			w={8}
			h={8}
			cursor={'pointer'}
			as={'a'}
			href={href}
			display={'inline-flex'}
			alignItems={'center'}
			justifyContent={'center'}
			transition={'background 0.3s ease'}
			_hover={{
				bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
			}}>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</chakra.button>
	)
}
  
const Footer = (): JSX.Element => (
	<Box
		bg={useColorModeValue('gray.50', 'gray.900')}
		color={useColorModeValue('gray.700', 'gray.200')}>
		<Container
			as={Stack}
			maxW={'6xl'}
			py={4}
			direction={{ base: 'column', md: 'row' }}
			spacing={4}
			justify={{ base: 'center', md: 'space-between' }}
			align={{ base: 'center', md: 'center' }}>
			<Text>Nam Phuong Market</Text>
			<Text>© {new Date().getFullYear()} . All rights reserved</Text>
			<Stack direction={'row'} spacing={6}>
				<SocialButton label={'Facebook'} href={'https://www.facebook.com/namphuongmkt/'}>
					<FaFacebookF />
				</SocialButton>
				<SocialButton label={'Yelp'} href={'https://www.yelp.com/biz/nam-phuong-market-portland'}>
					<FaYelp />
				</SocialButton>
				<SocialButton label={'Google'} href={'https://www.google.com/search?q=nam+phuong+market&oq=nam&aqs=chrome.1.69i60j69i59j69i57j69i65l2j69i60j69i65j69i60.1224j0j1&sourceid=chrome&ie=UTF-8#lrd=0x5495a13632dafcb5:0xd7bdf78e08fe874c,1,,,'}>
					<FaGoogle />
				</SocialButton>
			</Stack>
		</Container>
	</Box>
)


export default Footer