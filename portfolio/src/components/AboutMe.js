import React from 'react';
import '../css/style.css';
import Pdf from '../Assets/Files/Profile.pdf';

export default function About() {
	return (
		<>
			<div id='about'>
				<div className='container'>
					<div className='section-title text-center center'>
						<h2>About Me</h2>
						<hr></hr>
					</div>
					<div className='row'>
						<div className='col-md-12 text-center'>
							<img
								className='img-responsive'
								src={require('../Assets/Images/about.jpg')}
								alt='portfolio'
							/>
							<p className='aboutMe'>
								By day, I am the Director of Enterprise Technology at The Bakery
								Cos. By night, I am a student in the Vanderbilt Coding Bootcamp.
								I am based in Nashville, TN. I got into coding because I love
								technology and I love building things from scratch. As an
								artist, I have an eye for design. As a perfectionist, I feel
								like my work is never done. I have a strong work ethic and I am
								sure you will be happy with my web development skills. Contact
								me today and let's get to work!
							</p>
							<div id='resume'>
							<p className='text-center'>
								<a href={Pdf} target='_blank'>
									Download My Resume
									<hr></hr>
									<img
										src={require('../Assets/Images/dl.png')}
										id='logo2'
										width='1'
										height='1'
										alt='download logo'></img>
								</a>
							</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='section-title text-center center'>
				<h2>Portfolio</h2>
				<hr></hr>
			</div>
		</>
	);
}
