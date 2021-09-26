import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import PhotoGallery from '../../components/PhotoGallery'

import { GalleryImage } from '../../interfaces'
import { nonfoodsPhotos } from '../../data/nonfoodsPhotos'

type Props = {
	photos: GalleryImage[]
}

export default function NonfoodPhotos({ photos }: Props) {
	return (
		<Layout title="Kitchen Supplies Gallery">
			<PhotoGallery photos={photos} />
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const photos: GalleryImage[] = nonfoodsPhotos
	return { props: { photos }}
}
