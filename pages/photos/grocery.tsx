import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import PhotoGallery from '../../components/PhotoGallery'

import { GalleryImage } from '../../interfaces'
import { groceryPhotos } from '../../data/groceryPhotos'

type Props = {
	photos: GalleryImage[]
}

export default function GroceryPhotos({ photos }: Props) {
	return (
		<Layout title="Grocery Products Gallery">
			<PhotoGallery photos={photos} />
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const data = groceryPhotos
	const photos: GalleryImage[] = data
	return { props: { photos }}
}
