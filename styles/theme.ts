import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
	fonts: {
		heading: 'Open Sans',
		body: 'Raleway'
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