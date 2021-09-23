import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import PhotoGallery from '../../components/PhotoGallery'

import { fridgePhotos } from '../../data/fridgePhotos'
import { GalleryImage } from '../../interfaces'

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
	const photos: GalleryImage[] = fridgePhotos
	return { props: { photos }}
}
