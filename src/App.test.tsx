import {render, screen} from '@testing-library/react'
import HomeGreetings from './components/sections/HomeGreetings'

test('Render home with Renan Cavichi name', () => {
	render(<HomeGreetings />)
	const linkElement = screen.getByText(/Renan Cavichi/i)
	expect(linkElement).toBeInTheDocument()
})
