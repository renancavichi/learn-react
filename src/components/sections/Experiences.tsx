import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {useEffect, useState} from 'react'
import FullContainer from '../layout/FullContainer'
import SectionTitle from '../typography/SectionTitle'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

const query = `
{
  experiencesCollection {
    items {
      title
      company
      cover {
        url
      }
      description {
        json
      }
    }
  }
}
`

const Experiences = () => {
	const [exp, setExp] = useState<any>(null)
	useEffect(() => {
		fetch(`https://graphql.contentful.com/content/v1/spaces/o3i3cju24ni0/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				// Authenticate the request
				Authorization: 'Bearer pAQ8BYl23DdEglUoNnov2mq-bIAUrDMP23twVGMbUE0'
			},
			// send the GraphQL query
			body: JSON.stringify({query})
		})
			.then(response => response.json())
			.then(({data, errors}) => {
				console.log(data.experiencesCollection.items[0])
				setExp(data.experiencesCollection.items[0])
				if (errors) {
					console.error(errors)
				}
			})
	}, [])

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
				<Typography variant="h5" component="h2">
					{exp?.title || 'Loading...'}
				</Typography>
				<Typography variant="h6" component="h3">
					{exp?.company || 'Loading...'}
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
					<Box>
						<img
							width="40%"
							src={exp?.cover?.url || 'Loading...'}
							alt="teste"
						/>
					</Box>
					<Box>
						{exp?.description?.json
							? documentToReactComponents(exp?.description?.json)
							: 'Loading...'}
					</Box>
				</Box>
			</Box>
		</FullContainer>
	)
}

export default Experiences
