import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import PhotoGallery from '../../components/PhotoGallery'

import { GalleryImage } from '../../interfaces'
import { fridgePhotos } from '../../data/fridgePhotos'

type Props = {
	photos: GalleryImage[]
}

export default function FridgePhotos({ photos }: Props) {
	return (
		<Layout title="Fridge Products Gallery">
			<PhotoGallery photos={photos} />
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	// const result = await fetch('http://localhost:3000/api/photos/fridge')
	// const data = await result.json()
	const data = fridgePhotos
	const photos: GalleryImage[] = data
	return { props: { photos }}
}
