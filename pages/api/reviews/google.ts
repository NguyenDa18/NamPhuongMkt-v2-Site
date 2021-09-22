import { NextApiRequest, NextApiResponse } from 'next'
import { googleReviews } from '../../../data/googleReviews'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
	try {
		if (!Array.isArray(googleReviews)) {
			throw new Error('Cannot find Yelp reviews')
		}

		res.status(200).json(googleReviews)
	} catch (err) {
		res.status(500).json({ statusCode: 500, message: err.message })
	}
}

export default handler