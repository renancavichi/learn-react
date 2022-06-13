import {createTheme} from '@mui/material/styles'
import {grey} from '@mui/material/colors'

const theme = createTheme({
	palette: {
		primary: {
			main: '#C7581A'
		},
		secondary: {
			main: '#159CAB'
		}
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: grey[900]
				}
			}
		}
	}
})

export default theme
