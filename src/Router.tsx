import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Article from './pages/Article'
import Index from './pages/Index'
import Layout from './pages/Layout'

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Index />} />
				<Route path="/article/:slug" element={<Article />} />
			</Route>
		</Routes>
	)
}

export default Router
