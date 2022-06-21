import {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
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

interface Sections {
	home: number | undefined
	articles: number | undefined
	academic: number | undefined
	projects: number | undefined
}

const Menu = () => {
	const [value, setValue] = useState(0)
	const navigate = useNavigate()

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}

	const handleScroll = () => {
		const position = window?.pageYOffset || 0
		const home = document.querySelector('#home')
		const articles = document.querySelector('#articles')
		const academic = document.querySelector('#academic')
		const projects = document.querySelector('#projects')
		const sectionsYOffset = {
			home:
				home?.getBoundingClientRect().top !== undefined
					? home?.getBoundingClientRect().top + position
					: 0,
			articles:
				articles?.getBoundingClientRect().top !== undefined
					? articles?.getBoundingClientRect().top + position
					: 0,
			academic:
				academic?.getBoundingClientRect().top !== undefined
					? academic?.getBoundingClientRect().top + position
					: 0,
			projects:
				projects?.getBoundingClientRect().top !== undefined
					? projects?.getBoundingClientRect().top + position
					: 0
		}
		if (position < sectionsYOffset.home + 100) {
			setValue(0)
			//navigate('/#home')
		}
		if (
			position > sectionsYOffset.articles - 100 &&
			position < sectionsYOffset.articles + 30
		) {
			setValue(1)
		}
		if (
			position > sectionsYOffset.academic - 100 &&
			position < sectionsYOffset.academic + 30
		) {
			setValue(2)
		}
		if (
			position > sectionsYOffset.projects - 100 &&
			position < sectionsYOffset.projects + 30
		) {
			setValue(3)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

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
