import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

import React from 'react';

function Footer() {
	return (
		<footer className='Footer d-flex justify-content-center'>
			<a
				href='https://www.linkedin.com/in/douglas-peterson/'
				target='_blank'
				rel='noopener noreferrer'
				className='m-3'
			>
				<FaLinkedin size={32} />
			</a>

			<a
				href='https://github.com/doug-coder64/'
				target='_blank'
				rel='noopener noreferrer'
				className='m-3'
			>
				<FaGithub size={32} />
			</a>
			<a
				href='https://stackoverflow.com/users/16170974/doug-coder64'
				target='_blank'
				rel='noopener noreferrer'
				className='m-3'
			>
				<FaStackOverflow size={32} />
			</a>
		</footer>
	);
}

export default Footer;
