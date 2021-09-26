import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import PhotoGallery from '../../components/PhotoGallery'

import { GalleryImage } from '../../interfaces'
import { veggiesPhotos } from '../../data/veggiesPhotos'

type Props = {
	photos: GalleryImage[]
}

export default function VegetablesPhotos({ photos }: Props) {
	return (
		<Layout title="Fresh Vegetables Gallery">
			<PhotoGallery photos={photos} />
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const photos: GalleryImage[] = veggiesPhotos
	return { props: { photos }}
}
