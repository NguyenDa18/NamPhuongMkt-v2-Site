import React from 'react'
import { Container, SimpleGrid } from '@chakra-ui/layout'

import PhotoCard from './PhotoCard'
import { GalleryImage } from '../interfaces'

interface GalleryProps {
    photos: GalleryImage[]
}

export default function PhotoGallery({ photos }: GalleryProps) {
	return (
		<Container maxW="8xl" mt="95px" flex={1}>
			<SimpleGrid columns={{ base: 1, md: 2, lg: 3}} spacing={5}>
				{photos.map((photo, idx) => (
					<PhotoCard key={idx} photo={photo} />
				))}
			</SimpleGrid>
		</Container>
	)
}