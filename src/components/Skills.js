import React from 'react';
import '../css/style.css';

export default function Skills() {
	return (
		<>
			<div className='text-center' id='skills'>
				<h2>Skills</h2>
				<hr></hr>
				<span className='stretch'>
					<div className='section-title center'>
						<img
							className='img'
							src={require('../Assets/Images/html.png')}
							width='50'
							height='50'
							alt='html'
						/>
						<h5>HTML</h5>
						<img
							className='img'
							src={require('../Assets/Images/csslogo.png')}
							width='50'
							height='50'
							alt='css'
						/>
						<h5>CSS</h5>
						<img
							className='img'
							src={require('../Assets/Images/jslogo.png')}
							width='105'
							height='53'
							alt='javascript'
						/>
						<h5>JavaScript</h5>
						<img
							className='img'
							src={require('../Assets/Images/jquery-icon.png')}
							width='50'
							height='50'
							alt='jquery'
						/>
						<h5>JQuery</h5>
						<img
							className='img'
							src={require('../Assets/Images/mysql.png')}
							width='95'
							height='55'
							alt='mySQL'
						/>
						<h5>mySql</h5>
						<img
							className='img'
							src={require('../Assets/Images/mongo1.png')}
							width='100'
							height='65'
							alt='mongodb'
						/>
						<h5>MongoDB</h5>
						<img
							className='img'
							src={require('../Assets/Images/react.png')}
							width='100'
							height='65'
							alt='react'
						/>
						<h5>React</h5>
					</div>
				</span>
			</div>
		</>
	);
}
