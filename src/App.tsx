import './App.css'
// import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'

// // Components

import Navbar from './components/common/Navbar/Navbar'

function App() {
	return (
		<Router>
			<div>
				<Navbar />

				<AppRoutes />
			</div>
		</Router>
	)
}

export default App
