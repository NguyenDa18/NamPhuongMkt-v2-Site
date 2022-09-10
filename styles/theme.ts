import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
	fonts: {
		heading: `'Open Sans', sans-serif`,
		body: `'Raleway', sans-serif`
	},
	styles: {
		global: {
			html: {
				scrollBehavior: 'smooth'
			}
		}
	}
})

export default theme