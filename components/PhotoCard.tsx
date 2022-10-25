import React from 'react'
import { Box, Flex, Text} from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { GalleryImage } from '../interfaces'

const MotionImg = motion(Image)

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
				<MotionImg
					transition={{ duration: 0.3 }}
					whileHover={{ scale: 1.1 }}
					w="100%"
					h="100%"
					objectFit="cover"
					src={photo.src}
				/>
			</Box>
		</Box>
	)
}
