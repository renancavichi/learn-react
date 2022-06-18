import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import FullContainer from '../components/layout/FullContainer'
import HomeGreetings from '../components/sections/HomeGreetings'
import SectionTitle from '../components/typography/SectionTitle'

const Index = () => {
	const {hash} = useLocation()

	useEffect(() => {
		if (hash) {
			const section = document.querySelector(hash)
			section?.scrollIntoView({behavior: 'smooth', block: 'start'})
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
		</>
	)
}

export default Index
