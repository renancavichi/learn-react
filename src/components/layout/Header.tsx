import {useEffect, useRef, useState} from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {styled, Theme} from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Fab, {FabProps} from '@mui/material/Fab'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Logo from '../Logo'
import scrollSmoothTo from '../../utils/scrollSmoothTo'
import TabletUp from './TabletUp'
import Mobile from './Mobile'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import {FiMenu as MenuIcon} from 'react-icons/fi'
import {CgClose as CloseIcon} from 'react-icons/cg'
import {
	FaLinkedin as IconLinkedin,
	FaGithubSquare as IconGitHub
} from 'react-icons/fa'

const sections = [
	{
		label: 'Home',
		id: '#home'
	},
	// {
	// 	label: 'Articles',
	// 	id: '#articles'
	// },
	{
		label: 'Academic',
		id: '#academic'
	},
	{
		label: 'Projects',
		id: '#projects'
	}
]

const Header = () => {
	const {pathname} = useLocation()
	const [value, setValue] = useState<number | false>(
		pathname === '/' || pathname === '' ? 0 : false
	)
	const [isScrolling, setIsScrolling] = useState(false)
	const [openMenu, setOpenMenu] = useState(false)
	const [showFab, setShowFab] = useState(false)
	const isScrollingRef = useRef(isScrolling)
	const navigate = useNavigate()

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}

	const setIsScrollingRef = (data: boolean) => {
		isScrollingRef.current = data
		setIsScrolling(data)
	}

	const handleScroll = () => {
		if (!isScrollingRef.current) {
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
				// articles:
				// 	articles?.getBoundingClientRect().top !== undefined
				// 		? articles?.getBoundingClientRect().top + position
				// 		: 0,
				academic:
					academic?.getBoundingClientRect().top !== undefined
						? academic?.getBoundingClientRect().top + position
						: 0,
				projects:
					projects?.getBoundingClientRect().top !== undefined
						? projects?.getBoundingClientRect().top + position
						: 0
			}
			if (position < sectionsYOffset.home + 200) {
				setValue(0)
				//}  else if (
				// 	position > sectionsYOffset.articles - 300 &&
				// 	position < sectionsYOffset.articles + 100
				// ) {
				// setValue(1)
			} else if (
				position > sectionsYOffset.academic - 300 &&
				position < sectionsYOffset.academic + 100
			) {
				setValue(1)
			} else if (
				position > sectionsYOffset.projects - 300 &&
				position < sectionsYOffset.projects + 100
			) {
				setValue(2)
			}
			if (position > 300) {
				setShowFab(true)
			} else {
				setShowFab(false)
			}
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<AppBar>
			<Toolbar variant="dense">
				<Container disableGutters sx={style.containerHeader}>
					<Link
						to="/"
						style={style.linkLogo}
						onClick={() => {
							setValue(0)
							scrollSmoothTo('#home')
						}}
					>
						<Stack direction="row" sx={style.logo}>
							<Logo sx={style.iconLogo} />
							<Typography variant="h6" component="h1">
								Renan Cavichi
							</Typography>
						</Stack>
					</Link>
					<Nav>
						<Mobile>
							<MenuIcon
								onClick={() => setOpenMenu(true)}
								style={style.iconMenu}
							/>
							<SwipeableDrawer
								anchor="right"
								open={openMenu}
								onClose={() => setOpenMenu(false)}
								onOpen={() => setOpenMenu(true)}
								PaperProps={{sx: style.drawerPaper}}
							>
								<Toolbar
									sx={style.closeMenu}
									onClick={() => setOpenMenu(false)}
								>
									<CloseIcon style={style.iconClose} />
								</Toolbar>
								<Tabs
									orientation="vertical"
									value={value}
									onChange={handleChange}
									sx={style.tabsSM}
								>
									{sections.map(section => {
										return (
											<NavTab
												label={section.label}
												key={section.id}
												onClick={() => {
													if (pathname === '/' || pathname === '') {
														setOpenMenu(false)
														scrollSmoothTo(section.id)
														setIsScrollingRef(true)
														setTimeout(() => setIsScrollingRef(false), 2300)
													} else {
														navigate(`/${section.id}`)
													}
												}}
											/>
										)
									})}
								</Tabs>
							</SwipeableDrawer>
						</Mobile>
						<TabletUp>
							<Tabs value={value} onChange={handleChange} sx={style.tabs}>
								{sections.map(section => {
									return (
										<NavTab
											label={section.label}
											key={section.id}
											onClick={() => {
												if (pathname === '/' || pathname === '') {
													scrollSmoothTo(section.id)
													setIsScrollingRef(true)
													setTimeout(() => setIsScrollingRef(false), 2300)
												} else {
													navigate(`/${section.id}`)
												}
											}}
										/>
									)
								})}
							</Tabs>
						</TabletUp>
					</Nav>
				</Container>
			</Toolbar>
			<Stack sx={style.socialStack}>
				<Fab {...attr.fabGithub} sx={theme => style.social(theme, showFab)}>
					<IconGitHub style={style.iconLinkedin} />
				</Fab>
				<Fab {...attr.fabLinkedin} sx={theme => style.social(theme, showFab)}>
					<IconLinkedin style={style.iconLinkedin} />
				</Fab>
			</Stack>
		</AppBar>
	)
}

interface NavProps {
	children: React.ReactNode
}

const Nav = (props: NavProps) => {
	return (
		<Box ml="auto" component="nav" sx={{display: 'flex'}}>
			{props.children}
		</Box>
	)
}

interface TabProps {
	label: string
	onClick?: () => void
}

const NavTab = styled((props: TabProps) => <Tab disableRipple {...props} />)(
	({theme}) => ({
		color: 'rgba(255, 255, 255, 0.7)',
		'&.Mui-selected': {
			color: '#fff'
		},
		'&.Mui-focusVisible': {
			backgroundColor: 'rgba(100, 95, 228, 0.32)'
		},
		fontSize: theme.typography.pxToRem(16),
		fontWeight: theme.typography.fontWeightRegular,
		'&:hover': {color: '#fff'},
		textTransform: 'none'
	})
)

const attr = {
	fabGithub: {
		'aria-label': 'github',
		size: 'medium',
		component: 'a',
		href: 'https://github.com/renancavichi',
		target: '_blank'
	} as FabProps,
	fabLinkedin: {
		'aria-label': 'linkedin',
		size: 'medium',
		component: 'a',
		href: 'https://www.linkedin.com/in/renancavichi/',
		target: '_blank'
	} as FabProps
}

const style = {
	closeMenu: {
		alignItems: 'center',
		justifyContent: 'flex-end'
	},
	containerHeader: {
		alignItems: 'center',
		display: 'flex'
	},
	drawerPaper: {
		backgroundColor: '#000000d5',
		width: '50vw'
	},
	iconClose: {
		color: '#FFF',
		height: 23,
		width: 23
	},
	iconGithub: {
		fontSize: '1.57rem'
	},
	iconLinkedin: {
		fontSize: '1.5rem'
	},
	iconLogo: {
		marginRight: 1,
		height: 28,
		width: 28
	},
	iconMenu: {
		height: 23,
		width: 23
	},
	linkLogo: {
		color: '#fff',
		textDecoration: 'none',
		width: 'max-content'
	},
	logo: {
		alignItems: 'center'
	},
	social: (theme: Theme, showFab: boolean) => {
		return {
			color: theme.palette.grey[800],
			backgroundColor: theme.palette.grey[200],
			'&:hover': {
				color: theme.palette.grey[900],
				backgroundColor: theme.palette.grey[100]
			},
			opacity: showFab ? 1 : 0,
			marginTop: 1,
			transition: 'opacity 0.6s'
		}
	},
	socialStack: {
		bottom: 16,
		position: 'fixed',
		right: 16
	},
	tabs: {
		'& .MuiTabs-indicator': {
			borderRadius: 4,
			height: 4
		}
	},
	tabsSM: {
		'& .MuiTabs-indicator': {
			borderRadius: 4,
			left: 0,
			width: 4
		}
	}
}

export default Header
