/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'

import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import theme from '../styles/theme'

function App({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default App