import Project from './Project/Project';
import { ProjectList } from '../../data/data';
import React from 'react';

function Portfolio() {
	return (
		<div className='Portfolio p-5'>
			{ProjectList.map((list, index) => (
				<Project
					key={index}
					index={index}
					img={list.img}
					title={list.title}
					description={list.description}
					tech_stack={list.tech_stack}
					github={list.github_url}
					demo={list.demo_url}
				/>
			))}
		</div>
	);
}

export default Portfolio;
