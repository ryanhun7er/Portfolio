import React from 'react';
import '../css/style.css';

export default function Skills() {
	return (
		<>
			<div className='skills d-flex align-items-center text-center'>
				<span className='border-bottom-0'>
					<div className='skill-container d-inline-flex d-inline-block'>
						<img
							className='skill'
							src={require('../Assets/Images/html.png')}
							width='50'
							height='50'
							alt='html'
						/>

						<img
							className='skill'
							src={require('../Assets/Images/csslogo.png')}
							width='50'
							height='50'
							alt='css'
						/>

						<img
							className='skill'
							src={require('../Assets/Images/jslogo.png')}
							width='105'
							height='53'
							alt='javascript'
						/>

						<img
							className='skill'
							src={require('../Assets/Images/jquery-icon.png')}
							width='50'
							height='50'
							alt='jquery'
						/>

						<img
							className='skill'
							src={require('../Assets/Images/mysql.png')}
							width='95'
							height='55'
							alt='mySQL'
						/>

						<img
							className='skill'
							src={require('../Assets/Images/mongo1.png')}
							width='100'
							height='65'
							alt='mongodb'
						/>
					</div>
				</span>
			</div>
		</>
	);
}
