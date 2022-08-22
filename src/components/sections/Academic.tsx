import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import DegreeCard from '../DegreeCard'
import FullContainer from '../layout/FullContainer'
import PublicationCard from '../PublicationCard'
import SectionTitle from '../typography/SectionTitle'

const degrees = [
	{
		title: 'Master of Science: Software Engineer',
		level: 'Stricto Sensu',
		school: 'Aeronautics Institute of Technology',
		country: 'Brazil',
		dissertation: 'Usability Evaluation on Agile Software Development',
		year: '2010 - 2015'
	},
	{
		title: 'Master of Business Information Systems: Web Systems Development',
		level: 'Lato Sensu',
		school: 'Module University',
		country: 'Brazil',
		dissertation: 'Information Architecture for Specialized Social Network',
		year: '2010 - 2011'
	},
	{
		title: 'Bachelor of Information Systems',
		school: 'Module University',
		country: 'Brazil',
		dissertation: 'Hypermedia in the Development of Multiple Intelligences',
		year: '2002 - 2007'
	},
	{
		title: 'Computer Technician',
		school: 'Technical School of Sao Paulo',
		country: 'Brazil',
		year: '2000 - 2001'
	}
]

const publications = [
	{
		title:
			'Teaching Web Programming Based on Interdisciplinary Projects: An Experience Report',
		country: 'Athens, Greece',
		flag: 'GR',
		congress:
			'ATINER | 2nd Annual International Conference on Interdisciplinary Studies',
		url: 'https://www.atiner.gr/papers/INT2017-2344.pdf'
	},
	{
		title:
			'AGILUS: A Method for Integrating Usability Evaluations on Agile Software Development',
		country: 'Toronto, Canada',
		flag: 'CA',
		congress:
			'SPRINGER | International Conference on Human-Computer Interaction ',
		url: 'https://link.springer.com/chapter/10.1007/978-3-319-39510-4_50'
	},
	{
		title:
			'Applying Interdisciplinarity and Agile Methods in the Development of an Embedded System',
		country: 'Las Vegas, USA',
		flag: 'US',
		congress:
			'IEEE | International Conference on Information Technology: New Generations',
		url: 'https://ieeexplore.ieee.org/document/6822278'
	}
]

const Academic = () => {
	return (
		<FullContainer height="auto" grey={200} id="academic">
			<SectionTitle>Academic</SectionTitle>
			{degrees.map(degree => {
				return <DegreeCard key={degree.title} degree={degree} />
			})}
			<Box
				sx={theme => ({
					backgroundColor: theme.palette.grey[50],
					borderRadius: 4,
					my: 3,
					p: 3
				})}
			>
				<Typography variant="h4" component="h2">
					International Publications
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
					{publications.map(publication => {
						return (
							<PublicationCard
								key={publication.title}
								publication={publication}
							/>
						)
					})}
				</Box>
			</Box>
		</FullContainer>
	)
}

export default Academic
