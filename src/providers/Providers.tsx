import ColorModeProvider from './ColorModeProvider'
import ThemeProvider from './ThemeProvider'

interface Props {
	children?: React.ReactNode
}

const Providers = ({children}: Props) => {
	return (
		<ColorModeProvider>
			<ThemeProvider>{children}</ThemeProvider>
		</ColorModeProvider>
	)
}

export default Providers
