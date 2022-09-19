/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

// Global fonts
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'

import React from 'react'
import Script from 'next/script'
import { ChakraProvider } from '@chakra-ui/react'

import theme from '../styles/theme'

function App({ Component, pageProps }) {
	return (
		<>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
			<Script strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
			<Script id='google-analytics' strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}>
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
						page_path: window.location.pathname,
					});
				`}
			</Script>
		</>
	)
}

export default App