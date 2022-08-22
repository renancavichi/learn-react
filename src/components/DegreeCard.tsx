import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

interface Degree {
	title: string
	level?: string
	school: string
	country: string
	dissertation?: string
	year: string
}

const DegreeCard = ({degree}: {degree: Degree}) => {
	return (
		<Box
			sx={theme => ({
				backgroundColor: theme.palette.grey[50],
				borderRadius: 4,
				my: 3,
				p: 3
			})}
		>
			<Typography variant="h5" component="h3">
				{degree.title + ' '}
				{degree.level && (
					<Typography
						component="span"
						sx={theme => ({color: theme.palette.grey[600]})}
					>
						({degree.level})
					</Typography>
				)}
			</Typography>
			<Divider
				sx={theme => ({
					width: '100px',
					borderWidth: 2,
					borderColor: theme.palette.secondary.main,
					borderRadius: 4,
					mt: 1,
					mb: 2
				})}
			></Divider>
			<Typography variant="h6" component="h4">
				{degree.school + ' '}
				<Typography
					component="span"
					sx={theme => ({color: theme.palette.grey[600]})}
				>
					- {degree.country}
				</Typography>
			</Typography>
			{degree.dissertation && (
				<Typography
					component="p"
					sx={theme => ({color: theme.palette.grey[600]})}
				>
					Dissertation:{' '}
					<Typography
						component="span"
						sx={theme => ({color: theme.palette.grey[900]})}
					>
						{degree.dissertation}
					</Typography>
				</Typography>
			)}
			<Typography
				component="p"
				sx={theme => ({color: theme.palette.grey[600]})}
			>
				{degree.year}
			</Typography>
		</Box>
	)
}

export default DegreeCard
