import React from 'react'
import {
	Box,
	Flex,
	HStack,
	Link,
	IconButton,
	Button,
	useDisclosure,
	useColorMode,
	useColorModeValue,
	Stack,
	Text,
	useBreakpointValue
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, PhoneIcon } from '@chakra-ui/icons'
import { FaMoon, FaSun } from 'react-icons/fa'

import { NavbarLink } from '../interfaces'

const Links: NavbarLink[] = [
	{name: 'Home', link: '/'},
	{name: 'Testimonials', link: '/testimonials'},
	{name: 'Find us', link: '/map'}
]

const NavLink = ({ children }: { children: NavbarLink }) => (
	<Link
		px={2}
		py={1}
		rounded={'md'}
		_hover={{
			textDecoration: 'none',
			bg: useColorModeValue('gray.200', 'gray.700'),
		}}
		href={children.link}>
		{children.name}
	</Link>
)

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line react/prop-types
export default function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode()
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
			<Box bg={useColorModeValue('blue.500', 'gray.900')} px={4}>
				<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
					<IconButton
						size={'md'}
						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
						aria-label={'Open Menu'}
						display={{ md: 'none' }}
						backgroundColor={useColorModeValue('white', 'gray.700')}
						onClick={isOpen ? onClose : onOpen}
					/>
					<HStack spacing={8} alignItems={'center'}>
						<Text
							textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
							fontFamily={'heading'}
							color={useColorModeValue('black', 'white')}>
								Nam Phuong Market
						</Text>
						<HStack
							as={'nav'}
							spacing={4}
							display={{ base: 'none', md: 'flex' }}>
							{Links.map((link) => (
								<NavLink key={link.name}>{link}</NavLink>
							))}
						</HStack>
					</HStack>
					<Flex alignItems={'center'}>
						<Button
							href='tel:+19712551588'
							variant={'solid'}
							colorScheme={useColorModeValue('red', 'teal')}
							size={'sm'}
							mr={4}
							leftIcon={<PhoneIcon />}>
								Call Us
						</Button>
						<Button
							variant={'solid'}
							colorScheme={colorMode === 'dark' ? 'teal' : 'yellow'}
							onClick={toggleColorMode}
							size={'sm'}
							mr={4}
							leftIcon={colorMode === 'dark' ? <FaMoon /> : <FaSun />}>
						</Button>
					</Flex>
				</Flex>

				{isOpen ? (
					<Box pb={4} display={{ md: 'none' }}>
						<Stack as={'nav'} spacing={4}>
							{Links.map((link) => (
								<NavLink key={link.name}>{link}</NavLink>
							))}
						</Stack>
					</Box>
				) : null}
			</Box>
		</>
	)
}
