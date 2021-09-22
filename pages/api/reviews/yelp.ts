import { NextApiRequest, NextApiResponse } from 'next'
import { yelpReviews } from '../../../data/yelpReviews'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
	try {
		if (!Array.isArray(yelpReviews)) {
			throw new Error('Cannot find Yelp reviews')
		}

		res.status(200).json(yelpReviews)
	} catch (err) {
		res.status(500).json({ statusCode: 500, message: err.message })
	}
}

export default handler