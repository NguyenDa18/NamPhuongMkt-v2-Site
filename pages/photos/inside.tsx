import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import PhotoGallery from '../../components/PhotoGallery'

import { GalleryImage } from '../../interfaces'
import { insidePhotos } from '../../data/inside'

type Props = {
	photos: GalleryImage[]
}

export default function InsidePhotos({ photos }: Props) {
	return (
		<Layout title="Inside the store Gallery">
			<PhotoGallery photos={photos} />
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const photos: GalleryImage[] = insidePhotos
	return { props: { photos }}
}
