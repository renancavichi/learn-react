import {createTheme} from '@mui/material/styles'
import {grey} from '@mui/material/colors'

export const light = createTheme({
	palette: {
		mode: 'light',
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

export const dark = createTheme({
	palette: {
		mode: 'dark',
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
					backgroundColor: '#1c1c1c'
				}
			}
		}
	}
})
