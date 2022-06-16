import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Menu from '../components/Menu'
import {Outlet} from 'react-router-dom'

const Layout = () => {
	return (
		<>
			<CssBaseline />
			<Menu />
			<Outlet />
		</>
	)
}

export default Layout
