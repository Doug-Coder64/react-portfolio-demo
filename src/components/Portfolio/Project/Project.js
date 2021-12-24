import './Project.scss';

import React from 'react';

export default function Project(props) {
	return (
		<div className='Project'>
			<div className='Card-Left' href={props.demo}>
				<a href={props.demo}>
					<img src={props.img} alt={props.title} />
				</a>
			</div>
			<div className='Card-Right'>
				<h4>
					<a href={props.demo}>{props.title}</a>
				</h4>
				<p>{props.description}</p>
				<div className='stack'>
					<span className='stackTitle'>Tech Stack: </span>
					<span className='tags'>{props.tech_stack}</span>
				</div>
				<a href={props.github}>Check it out on GitHub</a>
			</div>
		</div>
	);
}
