import FullContainer from '../layout/FullContainer'
import SectionTitle from '../typography/SectionTitle'
import ExperienceCard, {Experience} from '../ExperienceCard'
import {useQuery} from 'react-query'
import {getExperiences} from '../../api/contentFul'

const Experiences = () => {
	const {data, isLoading, isError} = useQuery('experiences', getExperiences)
	const experiences = data?.data?.experiencesCollection?.items || []

	return (
		<FullContainer height="auto" grey={200} id="experiences">
			<SectionTitle>Experiences</SectionTitle>
			{isLoading && <p>Loading...</p>}
			{isError && (
				<p>Error to load experiences, please try to reload this page</p>
			)}
			{!isLoading &&
				!isError &&
				experiences &&
				experiences.length > 0 &&
				experiences.map((experience: Experience, index: number) => (
					<ExperienceCard
						key={index}
						title={experience.title}
						company={experience.company}
						cover={experience.cover}
						description={experience.description.json}
					/>
				))}
		</FullContainer>
	)
}

export default Experiences
