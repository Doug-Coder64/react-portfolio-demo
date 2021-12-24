import './Resume.scss';

import React from 'react';

function Resume() {
	return (
		<div className='Container'>
			<h1>Resume</h1>

			<a href='https://github.com/Doug-Coder64/react-portfolio-demo/raw/main/Resume.pdf'>
				Download Resume as PDF
			</a>

			<div className='mt-5'>
				<h3>OBJECTIVE</h3>
				<p>
					To obtain a position that is both challenging, and rewarding that
					allows the opportunity to use my current skill set to provide
					improvement and efficiency for software needs.
				</p>
			</div>
			<div>
				<h3>EXPERIENCE</h3>
				<h4>FCB Banks - Automation Consultant</h4>
				<p>March 2019 - Present</p>
				<ul>
					<li>
						Function as a technical expert across multiple project assignments
						of software implementation
					</li>
					<li>Identifying software application weaknesses and target areas</li>
					<li>
						Collaborating with departments on software faults to formulate plans
						for improvement
					</li>
					<li>Reviewing software bug reports and highlighting problem areas</li>
					<li>
						Provide support for implementation of new software among various
						departments
					</li>
					<li>
						Improve automation in current software to increase productivity
					</li>
				</ul>
				<h4>Batteries Plus Bulbs - Assistant Manager</h4>
				<p>September 2015 - March 2019</p>
				<ul>
					<li>
						Meet sales goals by training, motivating, mentoring, and providing
						feedback to sales staff
					</li>
					<li>Ensure a high level of customer satisfaction</li>
					<li>
						Ensure store administration and compliance with policies and
						procedures
					</li>
					<li>
						Maintain outstanding store condition and visual merchandising
						standards
					</li>
					<li>
						Report on inventory, buying trends, customer needs, and profits
					</li>
				</ul>
			</div>
			<div>
				<h3>EDUCATION</h3>
				<h4>Washington University - Coding Bootcamp</h4>
				<p>Certificate of Completion from the Technology Leadership Center</p>
				<h4>Edwardsville Highschool , Edwardsville, IL - Graduated May 2015</h4>
			</div>
			<div>
				<h3>RELEVANT SKILLS</h3>
				<h4>Technical:</h4>
				<ul>
					<li>
						Visual Studios Code, Javascript, React.js, Express.js, HTML, CSS,
						Python, Java, Go
					</li>
				</ul>

				<h4>Professional</h4>
				<ul>
					<li>Soft skills, Business Acumen</li>
				</ul>
			</div>
		</div>
	);
}

export default Resume;
