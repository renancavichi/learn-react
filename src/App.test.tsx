import {render, screen} from '@testing-library/react'
import HomeGreetings from './components/sections/HomeGreetings'

test('renders learn react link', () => {
	render(<HomeGreetings />)
	const linkElement = screen.getByText(/Renan Cavichi/i)
	expect(linkElement).toBeInTheDocument()
})
