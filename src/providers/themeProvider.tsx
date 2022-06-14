import theme from '../theme/theme'
import {ThemeProvider as MUIThemeProvider} from '@mui/material/styles'

interface Props {
	children?: React.ReactNode
}

const ThemeProvider = ({children}: Props): React.ReactNode => {
	return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
}

export default ThemeProvider
