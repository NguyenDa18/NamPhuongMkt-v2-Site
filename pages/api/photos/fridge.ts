import { NextApiRequest, NextApiResponse } from 'next'
import { fridgePhotos } from '../../../data/fridgePhotos'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
	try {
		if (!Array.isArray(fridgePhotos)) {
			throw new Error('Cannot find photos')
		}

		res.status(200).json(fridgePhotos)
	} catch (err) {
		res.status(500).json({ statusCode: 500, message: err.message })
	}
}

export default handler