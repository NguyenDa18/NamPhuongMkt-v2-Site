import React, { useState } from 'react'
import { Container, SimpleGrid } from '@chakra-ui/layout'

import PhotoCard from './PhotoCard'
import { GalleryImage } from '../interfaces'
import { useDisclosure } from '@chakra-ui/hooks'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import { Img } from '@chakra-ui/image'
import { Button } from '@chakra-ui/button'

interface GalleryProps {
    photos: GalleryImage[]
}

export default function PhotoGallery({ photos }: GalleryProps) {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [selectedPhoto, setSelectedPhoto] = useState<GalleryImage | null>(null)

	const view = (photo) => {
		setSelectedPhoto(photo)
		onOpen()
	}
	return (
		<Container maxW="8xl" mt="95px" flex={1}>
			<SimpleGrid columns={{ base: 1, md: 2, lg: 3}} spacing={5}>
				{photos.map((photo, idx) => (
					<PhotoCard key={idx} photo={photo} onImageClick={view} />
				))}
			</SimpleGrid>
			{selectedPhoto && (
				<Modal blockScrollOnMount={false} isCentered isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom" size='2xl'>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>
							{selectedPhoto.caption}
						</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<Img src={selectedPhoto.src} alt={selectedPhoto.caption} />
						</ModalBody>
						<ModalFooter>
							<Button onClick={onClose}>Close</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			)}
		</Container>
	)
}