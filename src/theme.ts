import {createTheme, responsiveFontSizes} from '@mui/material/styles'

export const light = responsiveFontSizes(
	createTheme({
		palette: {
			mode: 'light',
			primary: {
				main: '#C7581A'
			},
			secondary: {
				main: '#159CAB'
			},
			grey: {
				'50': '#fafafa',
				'100': '#f5f5f5',
				'200': '#eeeeee',
				'300': '#e0e0e0',
				'400': '#bdbdbd',
				'500': '#9e9e9e',
				'600': '#757575',
				'700': '#616161',
				'800': '#424242',
				'900': '#212121'
			}
		},
		components: {
			MuiAppBar: {
				styleOverrides: {
					root: {
						backgroundColor: '#000000e0',
						boxShadow:
							'-1px 0px 1px -7px rgb(0 0 0 / 20%), 1px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 2px 0px rgb(0 0 0 / 12%)'
					}
				}
			}
		}
	})
)

export const dark = responsiveFontSizes(
	createTheme({
		palette: {
			mode: 'dark',
			primary: {
				main: '#C7581A'
			},
			secondary: {
				main: '#159CAB'
			},
			grey: {
				'50': '#212121',
				'100': '#424242',
				'200': '#616161',
				'300': '#757575',
				'400': '#9e9e9e',
				'500': '#bdbdbd',
				'600': '#e0e0e0',
				'700': '#eeeeee',
				'800': '#f5f5f5',
				'900': '#fafafa'
			}
		},
		components: {
			MuiAppBar: {
				styleOverrides: {
					root: {
						backgroundColor: '#000000e0',
						boxShadow: 'none'
					}
				}
			}
		}
	})
)
