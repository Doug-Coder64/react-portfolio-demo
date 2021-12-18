import React from 'react';

function About() {
	return (
		<div className='m-5 container'>
			<h3>About Me</h3>
			<img
				alt='Profile'
				src='https://avatars.githubusercontent.com/u/85598391?v=4'
				className='mx-2 mt-4'
			/>
			<p className='lead my-4 pb-5'>
				Hello! My name is Douglas Peterson and I am a full stack developer. From
				Bootcamp, to self taught and on the job experience, I've learned
				adaptable skills that can be applied to any project.
			</p>
		</div>
	);
}

export default About;
