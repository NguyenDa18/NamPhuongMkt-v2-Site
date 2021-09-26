import React from 'react'
import { Container, AspectRatio } from '@chakra-ui/react'

export default function EmbedMap() {
	return (
		<Container maxW={'6xl'} py={12} pt={100}>
			<AspectRatio ratio={16 / 9} boxShadow="outline">
				<iframe title='Nam Phuong Market Embedded Google Map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.180199746168!2d-122.594795249021!3d45.54670043585335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a13632dafcb5%3A0xd7bdf78e08fe874c!2sNam%20Phuong%20Market!5e0!3m2!1sen!2sus!4v1567934431008!5m2!1sen!2sus' height='350' width='100%'>
				</iframe>
			</AspectRatio>
		</Container>
	)
}