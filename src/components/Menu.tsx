import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import {styled} from '@mui/material/styles'
import Logo from './Logo'
import HideOnScroll from '../utils/HideOnScroll'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import {Tab} from '@mui/material'
import {useState} from 'react'

interface Props {
	children: React.ReactNode
}

export default function Menu() {
	const [value, setValue] = useState(0)

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}
	return (
		<HideOnScroll>
			<AppBar>
				<Toolbar variant="dense">
					<Logo sx={sx.logo} />
					<Typography variant="h5" component="div">
						Renan Cavichi
					</Typography>
					<Nav>
						<Tabs
							value={value}
							onChange={handleChange}
							component="ul"
							variant="standard"
							TabIndicatorProps={{style: {height: 4}}}
							sx={{
								marginBlockEnd: 0,
								marginBlockStart: 0
							}}
						>
							<StyledTab label="Home" />
							<StyledTab label="Articles" />
							<StyledTab label="Academic" />
							<StyledTab label="Projects" />
						</Tabs>
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

interface StyledTabProps {
	label: string
}

const StyledTab = styled((props: StyledTabProps) => (
	<Tab
		component="li"
		disableRipple
		//sx={{'&:hover': {backgroundColor: '#fff'}}}
		{...props}
	/>
))(({theme}) => ({
	textTransform: 'none',
	fontWeight: theme.typography.fontWeightRegular,
	fontSize: theme.typography.pxToRem(15),
	marginRight: theme.spacing(1),
	color: 'rgba(255, 255, 255, 0.7)',
	'&.Mui-selected': {
		color: '#fff'
	},
	'&.Mui-focusVisible': {
		backgroundColor: 'rgba(100, 95, 228, 0.32)'
	},
	'&:hover': {color: '#fff'}
}))
