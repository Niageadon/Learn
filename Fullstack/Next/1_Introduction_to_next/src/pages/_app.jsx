import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from '../styles/theme'
export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps}/>
		</ThemeProvider>
	)
}
