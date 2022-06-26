import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import HomeBackground from '../../assets/images/home-background.jpg'
import AvatarRenanCavichi from '../../assets/images/avatar-renan-cavichi.jpg'
import {BsArrowDownCircle} from 'react-icons/bs'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'

const HomeGreetings = () => {
	return (
		<Box
			component={'section'}
			id="home"
			sx={{
				bgcolor: '#000',
				backgroundImage: `url(${HomeBackground})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center center',
				height: '100vh',
				maxHeight: 800,
				minHeight: 600
			}}
		>
			<Container
				disableGutters
				sx={{
					bgcolor: '#76789700',
					height: '100vh',
					maxHeight: 800,
					minHeight: 600,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					position: 'relative'
				}}
			>
				<Grid
					container
					sx={{
						bgcolor: '#64564600',
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<Grid
						item
						xs={7}
						sm={4}
						md={3}
						key={'avatar'}
						sx={{
							bgcolor: '#0b208800',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						<img
							src={AvatarRenanCavichi}
							width="70%"
							height="auto"
							style={{
								borderRadius: '50%',
								border: '4px solid #fff'
							}}
							alt="Renan Cavichi"
						/>
					</Grid>
					<Grid
						item
						xs={10}
						sm={7}
						md={6}
						key={'greetings'}
						sx={theme => ({
							height: 'auto',
							bgcolor: '#c6700e00',
							[theme.breakpoints.down('sm')]: {
								textAlign: 'center',
								mt: 3
							}
						})}
					>
						<Typography variant="h4" component="h4" color="#FFF">
							<span style={{color: '#C4C4C4'}}>Hi! I'm</span> Renan Cavichi
						</Typography>
						<Divider
							sx={theme => ({
								width: '100px',
								borderWidth: 2,
								borderColor: theme.palette.secondary.main,
								borderRadius: 4,
								mt: 1,
								mb: 2,
								[theme.breakpoints.down('sm')]: {
									mx: 'auto'
								}
							})}
						></Divider>
						<Typography variant="h6" component="p" color="#FFF">
							<span style={{color: '#C4C4C4'}}>MSc</span> Software Engineer,
							specialized on Web Development, Usability{' '}
							<span style={{color: '#C4C4C4'}}>and</span> Agile Methods.
						</Typography>
						<Button variant="contained" sx={{mt: 3}}>
							Download CV
						</Button>
					</Grid>
				</Grid>
				<Box sx={{textAlign: 'center', position: 'absolute', bottom: 60}}>
					<BsArrowDownCircle
						style={{
							fontSize: '2rem',
							color: '#ffffff7f'
						}}
					/>
				</Box>
			</Container>
		</Box>
	)
}

export default HomeGreetings
