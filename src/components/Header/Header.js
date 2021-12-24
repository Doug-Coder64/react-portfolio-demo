import React, { useEffect } from 'react';

function Header(props) {
	useEffect(() => {
		document.title = props.currentPage;
	}, [props.currentPage]);
	const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];
	return (
		<nav className='Header navbar navbar-expand-sm '>
			<h1 className='m-4'>
				<a href='/'>Douglas Peterson</a>
			</h1>
			<div className='collapse navbar-collapse'>
				<ul className='navbar-nav mr-auto'>
					{tabs.map((tab) => (
						<li className='nav-item' key={tab}>
							<a
								href={`#${tab.toLowerCase()}`}
								onClick={() => props.handlePageChange(tab)}
								className={
									props.currentPage === tab ? 'nav-link active' : 'nav-link'
								}
							>
								{tab}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}

export default Header;
