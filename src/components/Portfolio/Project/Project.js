import { FaGithub } from 'react-icons/fa';
import React from 'react';

export default function Project(props) {
	return (
		<div className='Project '>
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

				<span>Tech Stack</span>
				<span>{props.tech_stack}</span>
				<a href={props.github}>
					<FaGithub size={25} />
				</a>
			</div>
		</div>
	);
}
