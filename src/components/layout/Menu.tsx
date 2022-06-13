import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Logo from '../Logo'
import HideOnScroll from '../../utils/HideOnScroll'
import Box from '@mui/material/Box'

interface Props {
	children: React.ReactNode
}

export default function Menu() {
	return (
		<HideOnScroll>
			<AppBar>
				<Toolbar>
					<Logo sx={sx.logo} />
					<Typography variant="h5" component="div">
						Renan Cavichi
					</Typography>
					<Nav>
						<Typography variant="body1" component="div">
							Menu
						</Typography>
					</Nav>
				</Toolbar>
			</AppBar>
		</HideOnScroll>
	)
}

const Nav = (props: Props) => {
	return (
		<Box ml="auto" component="nav">
			{props.children}
		</Box>
	)
}

const sx = {
	logo: {
		mr: 1
	}
}
