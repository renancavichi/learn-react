import {Container} from '@mui/material'
import {useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'

const Index = () => {
	const {hash} = useLocation()

	useEffect(() => {
		if (hash) {
			const section = document.querySelector(hash)
			section?.scrollIntoView({behavior: 'smooth'})
		}
	}, [hash])

	return (
		<>
			<Container sx={{mt: 8}} component="section">
				<Link to="/#article">Hash: {hash}</Link>
				<Link to="/#about">Hash: {hash}</Link>
				<Link to="/#last">Hash: {hash}</Link>
			</Container>
			<Container
				id="article"
				sx={{height: 500, backgroundColor: '#b6b6b6'}}
				component="section"
			>
				<Link to="/article/test">Article Test</Link>
			</Container>
			<Container
				id="about"
				sx={{height: 500, backgroundColor: '#f4f4f4'}}
				component="section"
			>
				<Link to="/article/test">About</Link>
			</Container>

			<Container
				id="last"
				sx={{height: 500, backgroundColor: '#d2d2d2'}}
				component="section"
			>
				<Link to="/article/test">Article Last</Link>
			</Container>
		</>
	)
}

export default Index
