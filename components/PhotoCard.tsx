import React from 'react'
import { Box, Flex, Text} from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { GalleryImage } from '../interfaces'

const MotionImg = motion(Image)

interface CardProps {
    photo: GalleryImage
}

export default function PhotoCard({ photo }: CardProps) {
	return (
		<Box 
			borderRadius={['sm', null, 'md']} overflow="hidden">
			<Box
				cursor="pointer"
				h="250px"
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
