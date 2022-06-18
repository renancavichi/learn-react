import {useState} from 'react'
import {Link} from 'react-router-dom'
import {styled} from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Logo from './Logo'
import HideOnScroll from '../utils/HideOnScroll'

interface Props {
	children: React.ReactNode
}

const Menu = () => {
	const [value, setValue] = useState(0)

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}

	return (
		<HideOnScroll>
			<AppBar>
				<Toolbar variant="dense">
					<Container disableGutters sx={style.container}>
						<Link to="/#home" style={style.linkLogo}>
							<Stack direction="row" sx={{alignItems: 'center'}}>
								<Logo sx={style.logo} />
								<Typography variant="h5" component="h1">
									Renan Cavichi
								</Typography>
							</Stack>
						</Link>
						<Nav>
							<Tabs value={value} onChange={handleChange} sx={style.tabs}>
								<NavTab label="Home" to="/#home" />
								<NavTab label="Articles" to="/#articles" />
								<NavTab label="Academic" to="/#academic" />
								<NavTab label="Projects" to="/#projects" />
							</Tabs>
						</Nav>
					</Container>
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

interface StyledTabProps {
	label: string
	to: string
}

const NavTab = styled((props: StyledTabProps) => (
	<Tab component={Link} disableRipple {...props} />
))(({theme}) => ({
	textTransform: 'none',
	fontWeight: theme.typography.fontWeightRegular,
	fontSize: theme.typography.pxToRem(15),
	color: 'rgba(255, 255, 255, 0.7)',
	'&.Mui-selected': {
		color: '#fff'
	},
	'&.Mui-focusVisible': {
		backgroundColor: 'rgba(100, 95, 228, 0.32)'
	},
	'&:hover': {color: '#fff'}
}))

const style = {
	logo: {
		mr: 1
	},
	tabs: {
		'& .MuiTabs-indicator': {
			height: 4,
			borderRadius: 4
		}
	},
	linkLogo: {
		textDecoration: 'none',
		color: '#fff',
		width: 'max-content'
	},
	container: {
		display: 'flex',
		alignItems: 'center'
	}
}

export default Menu
