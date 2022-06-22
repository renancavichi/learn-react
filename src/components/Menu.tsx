import {useEffect, useRef, useState} from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
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
import scrollSmoothTo from '../utils/scrollSmoothTo'

interface Props {
	children: React.ReactNode
}

const Menu = () => {
	const {pathname} = useLocation()
	const [value, setValue] = useState<number | false>(
		pathname === '/' || pathname === '' ? 0 : false
	)
	const [isScrolling, setIsScrolling] = useState(false)
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
			if (position < sectionsYOffset.home + 200) {
				setValue(0)
			} else if (
				position > sectionsYOffset.articles - 300 &&
				position < sectionsYOffset.articles + 100
			) {
				setValue(1)
			} else if (
				position > sectionsYOffset.academic - 300 &&
				position < sectionsYOffset.academic + 100
			) {
				setValue(2)
			} else if (
				position > sectionsYOffset.projects - 300 &&
				position < sectionsYOffset.projects + 100
			) {
				setValue(3)
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
		<HideOnScroll>
			<AppBar>
				<Toolbar variant="dense">
					<Container disableGutters sx={style.container}>
						<Link
							to="/"
							onClick={() => {
								setValue(0)
								scrollSmoothTo('#home')
							}}
							style={style.linkLogo}
						>
							<Stack direction="row" sx={{alignItems: 'center'}}>
								<Logo sx={style.logo} />
								<Typography variant="h5" component="h1">
									Renan Cavichi
								</Typography>
							</Stack>
						</Link>
						<Nav>
							<Tabs value={value} onChange={handleChange} sx={style.tabs}>
								<NavTab
									label="Home"
									onClick={() => {
										if (pathname === '/' || pathname === '') {
											scrollSmoothTo('#home')
											setIsScrollingRef(true)
											setTimeout(() => setIsScrollingRef(false), 2300)
										} else {
											navigate('/#home')
										}
									}}
								/>
								<NavTab
									label="Articles"
									onClick={() => {
										if (pathname === '/' || pathname === '') {
											scrollSmoothTo('#articles')
											setIsScrollingRef(true)
											setTimeout(() => setIsScrollingRef(false), 2300)
										} else {
											navigate('/#articles')
										}
									}}
								/>
								<NavTab
									label="Academic"
									onClick={() => {
										if (pathname === '/' || pathname === '') {
											scrollSmoothTo('#academic')
											setIsScrollingRef(true)
											setTimeout(() => setIsScrollingRef(false), 2300)
										} else {
											setIsScrolling(true)
											navigate('/#academic')
										}
									}}
								/>
								<NavTab
									label="Projects"
									onClick={() => {
										if (pathname === '/' || pathname === '') {
											scrollSmoothTo('#projects')
											setIsScrollingRef(true)
											setTimeout(() => setIsScrollingRef(false), 2300)
										} else {
											navigate('/#projects')
										}
									}}
								/>
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
	onClick?: () => void
}

const NavTab = styled((props: StyledTabProps) => (
	<Tab disableRipple {...props} />
))(({theme}) => ({
	textTransform: 'none',
	fontWeight: theme.typography.fontWeightRegular,
	fontSize: theme.typography.pxToRem(16),
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
