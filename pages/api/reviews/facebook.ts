import { NextApiRequest, NextApiResponse } from 'next'
import { facebookReviews } from '../../../data/facebookReviews'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
	try {
		if (!Array.isArray(facebookReviews)) {
			throw new Error('Cannot find Facebook reviews')
		}

		res.status(200).json(facebookReviews)
	} catch (err) {
		res.status(500).json({ statusCode: 500, message: err.message })
	}
}

export default handler