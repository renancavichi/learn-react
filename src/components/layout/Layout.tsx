import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from './Header'
import {Outlet} from 'react-router-dom'

const Layout = () => {
	return (
		<>
			<CssBaseline />
			<Header />
			<Outlet />
		</>
	)
}

export default Layout
