import Providers from './providers/Providers'
import CssBaseline from '@mui/material/CssBaseline'
import Menu from './components/layout/Menu'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

function App() {
	return (
		<Providers>
			<CssBaseline />
			<Menu />
			<Container>
				<Box sx={{my: 2}}>
					{[...new Array(35)]
						.map(
							() => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
						)
						.join('\n')}
				</Box>
			</Container>
		</Providers>
	)
}

export default App
