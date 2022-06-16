import Providers from './providers/Providers'
import Routes from './Router'
import {BrowserRouter} from 'react-router-dom'

function App() {
	return (
		<BrowserRouter>
			<Providers>
				<Routes />
			</Providers>
		</BrowserRouter>
	)
}

export default App
