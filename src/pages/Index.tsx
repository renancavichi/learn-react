import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import FullContainer from '../components/layout/FullContainer'
import HomeGreetings from '../components/sections/HomeGreetings'
import SectionTitle from '../components/typography/SectionTitle'
import scrollSmoothTo from '../utils/scrollSmoothTo'

const Index = () => {
	const {hash} = useLocation()

	useEffect(() => {
		if (hash) {
			scrollSmoothTo(hash)
		}
	}, [hash])

	return (
		<>
			<HomeGreetings />
			<FullContainer grey={50} id="articles">
				<SectionTitle>Articles</SectionTitle>
			</FullContainer>
			<FullContainer grey={200} id="academic">
				<SectionTitle>Academic</SectionTitle>
			</FullContainer>
			<FullContainer grey={100} id="projects">
				<SectionTitle>Projects</SectionTitle>
			</FullContainer>
			<FullContainer grey={900} height={800}>
				<SectionTitle>Footer</SectionTitle>
			</FullContainer>
		</>
	)
}

export default Index
