import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

export interface Experience {
	title: string
	company: string
	cover: {url: string}
	description: any
}

const ExperienceCard = ({title, cover, company, description}: Experience) => {
	return (
		<Box
			sx={theme => ({
				backgroundColor: theme.palette.grey[50],
				borderRadius: 4,
				my: 3,
				p: 3
			})}
		>
			<Typography variant="h5" component="h2">
				{title}
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
			/>
			<Typography
				variant="h6"
				component="h3"
				sx={{
					mb: 2
				}}
			>
				{company}
			</Typography>
			<Box
				sx={theme => ({
					display: 'flex',
					justifyContent: 'flex-start',
					'& div:first-of-type': {
						maxWidth: '340px'
					},
					'& > div img': {
						width: '100%',
						aspectRatio: 447 / 796
					},
					[theme.breakpoints.down('sm')]: {
						flexWrap: 'wrap',
						'& div:first-of-type': {
							width: '100%',
							maxWidth: '100%'
						}
					}
				})}
			>
				<Box>
					<img src={cover.url} alt={title} />
				</Box>
				<Box>{documentToReactComponents(description)}</Box>
			</Box>
		</Box>
	)
}

export default ExperienceCard
