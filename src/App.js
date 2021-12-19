import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';

function App() {
	const [currentPage, handlePageChange] = useState('About');

	const renderPage = () => {
		switch (currentPage) {
			case 'About':
				return <About />;
			case 'Portfolio':
				return <Portfolio />;
			case 'Contact':
				return <Contact />;
			case 'Resume':
				return <Resume />;
			default:
				return <About />;
		}
	};
	return (
		<div className='App'>
			<Header currentPage={currentPage} handlePageChange={handlePageChange} />
			<div>{renderPage()}</div>
			<Footer />
		</div>
	);
}

export default App;
