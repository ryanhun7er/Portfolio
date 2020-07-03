import React from 'react';
import '../css/style.css';

export default function Skills() {
	return (
		<>
			<div className='skills text-center'>
				<span class='container'>
					<div className='section-title center'>
						||
						<img
							className='col-md-4 col-sm-6 skill'
							src={require('../Assets/Images/html.png')}
							alt='html'
						/>
						||
						<img
							className='col-md-4 col-sm-6 skill'
							src={require('../Assets/Images/csslogo.png')}
							alt='css'
						/>
						||
						<img
							className='col-md-4 col-sm-6 skill'
							src={require('../Assets/Images/jslogo.png')}
							alt='javascript'
						/>
						||
						<img
							className='col-md-4 col-sm-6 skill'
							src={require('../Assets/Images/jquery-col-md-4 col-sm-6 skill.png')}
							alt='jquery'
						/>
						||
						<img
							className='col-md-4 col-sm-6 skill'
							src={require('../Assets/Images/mysql.png')}
							alt='mySQL'
						/>
						||
						<img
							className='col-md-4 col-sm-6 skill'
							src={require('../Assets/Images/mongo1.png')}
							alt='mongodb'
						/>
						||
					</div>
				</span>
			</div>
		</>
	);
}
