import React from 'react'
import Image from 'next/image'
import { Box } from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/color-mode'

import { GalleryImage } from '../interfaces'

interface CardProps {
    photo: GalleryImage,
	onImageClick: (photo: GalleryImage) => void
}

export default function PhotoCard({ photo, onImageClick }: CardProps) {
	return (
		<Box 
			backgroundColor={useColorModeValue('gray.200', 'gray.700')}
			borderRadius={['sm', null, 'md']}
			boxShadow="lg"
			overflow="hidden">
			<Box
				onClick={() => onImageClick(photo)}
				cursor="pointer"
				h="200px"
				position="relative"
				overflow="hidden">
				<Image
					alt="store image"
					layout='fill'
					objectFit="cover"
					src={photo.src}
				/>
			</Box>
		</Box>
	)
}
