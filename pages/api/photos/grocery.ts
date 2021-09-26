import { NextApiRequest, NextApiResponse } from 'next'
import { groceryPhotos } from '../../../data/groceryPhotos'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
	try {
		if (!Array.isArray(groceryPhotos)) {
			throw new Error('Cannot find photos')
		}

		res.status(200).json(groceryPhotos)
	} catch (err) {
		res.status(500).json({ statusCode: 500, message: err.message })
	}
}

export default handler