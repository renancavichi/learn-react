import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FullContainer from '../layout/FullContainer'
import SectionTitle from '../typography/SectionTitle'

const Experiences = () => {
	return (
		<FullContainer height="auto" grey={200} id="academic">
			<SectionTitle>Experiences</SectionTitle>
			<Box
				sx={theme => ({
					backgroundColor: theme.palette.grey[50],
					borderRadius: 4,
					my: 3,
					p: 3
				})}
			>
				<Typography variant="h4" component="h2">
					AventureBox | Full Stack Lead / Founder
				</Typography>
				<Box
					sx={theme => ({
						display: 'flex',
						justifyContent: 'space-around',
						[theme.breakpoints.down('md')]: {
							flexWrap: 'wrap',
							justifyContent: 'flex-start'
						}
					})}
				>
					Just an example
				</Box>
			</Box>
		</FullContainer>
	)
}

export default Experiences
