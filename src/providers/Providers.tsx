import React from 'react'
import ThemeProvider from './themeProvider'

interface Props {
	children?: React.ReactNode
}

const Providers = ({children}: Props): React.ReactNode => {
	return <ThemeProvider>{children}</ThemeProvider>
}

export default Providers
