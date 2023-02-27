import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Flag from 'react-world-flags'

interface Publication {
	title: string
	country: string
	flag: string
	congress: string
	url: string
}

const PublicationCard = ({publication}: {publication: Publication}) => {
	return (
		<Box
			sx={theme => ({
				backgroundColor: theme.palette.grey[200],
				borderRadius: 4,
				m: 3,
				p: 3,
				[theme.breakpoints.down('md')]: {
					width: '100%',
					my: 2,
					mx: 0
				}
			})}
		>
			<Typography variant="subtitle1" component="p" sx={{display: 'flex', alignItems: 'center', gap: '6px'}}>
				<Flag
					code={publication.flag}
					aria-label={publication.country}
          alt={publication.country}
          style={{width: '22px', height: '12px', borderRadius: '2px'}}
				/>
				<span> {publication.country}</span>
			</Typography>

			<Typography sx={{fontSize: '1.2rem', my: 1}} component="h3">
				{publication.title}
			</Typography>

			<Link href={publication.url} target="_blank">
				{publication.congress}
			</Link>
		</Box>
	)
}

export default PublicationCard
