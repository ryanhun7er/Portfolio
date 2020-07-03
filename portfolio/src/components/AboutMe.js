import React from 'react';
import '../css/style.css';

export default function About() {
	return (
		<>
			<div className='row-space'> </div>
			<div className='d-flex justify-content-center about-section' id='about'>
				<div className='container text-wrap'>
					<div className='d-flex justify-content-center'>
						<div className='text-wrap'>
							<img
								className='text-center'
								src={require('../Assets/Images/about.jpg')}
								alt='portfolio'
								id='port-pic'
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
							<p className='text-center'>
								<a className='button' href='../Assets/Files/Profile.pdf'>
									<img
										src={require('../Assets/Images/dl.png')}
										id='logo2'
										width='1'
										height='1'
										alt='download logo'></img>
									Download My Resume
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
