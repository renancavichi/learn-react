import {ThemeProvider as Theme} from '@mui/material/styles'
import {light, dark} from '../theme'
import useColorMode from '../hooks/useColorMode'

interface Props {
	children?: React.ReactNode
}
const ThemeProvider = ({children}: Props) => {
	const mode = useColorMode()
	return <Theme theme={mode === 'light' ? light : dark}>{children}</Theme>
}

export default ThemeProvider
