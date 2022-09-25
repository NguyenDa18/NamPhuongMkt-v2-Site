/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

// Global fonts
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'

import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { GoogleAnalytics } from 'nextjs-google-analytics'

import theme from '@/styles/theme'

function App({ Component, pageProps }) {
	return (
		<>
			<ChakraProvider theme={theme}>
				<GoogleAnalytics trackPageViews />
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	)
}

export default App