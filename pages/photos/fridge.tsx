import React from 'react'
import Layout from '../../components/Layout'
import PhotoGallery from '../../components/PhotoGallery'

import { fridgePhotos } from '../../data/fridgePhotos'

export default function FridgePhotos() {
	return (
		<Layout title="Fridge Products Gallery">
			<PhotoGallery photos={fridgePhotos} />
		</Layout>
	)
}
