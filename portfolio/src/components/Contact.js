import React from 'react';
import '../css/style.css';

export default function Contact() {
	return (
		<>
			<div className='row-space'> </div>
			<div className='contact-container text-center'>
				<div className='section-title center'>
					<h2 className='contact-title'>Contact Me</h2>

					<div className='contact-container'>
						||
						<a className='contact-img'>
							<img
								src={require('../Assets/Images/guitar.gif')}
								alt='location'
							/>
							<p>Nashville, TN</p>
						</a>
						||
						<a className='contact-img' href='mailto:ryanhwilkinson@icloud.com'>
							{' '}
							<img src={require('../Assets/Images/email.gif')} alt='email' />
						</a>
						||
						<a
							className='contact-img'
							href='https://www.linkedin.com/in/ryanhunterwilkinson/'>
							<img
								src={require('../Assets/Images/linkedin.gif')}
								alt='linkedin'
							/>
						</a>
						||
						<a className='contact-img' href='https://github.com/ryanhun7er'>
							<img src={require('../Assets/Images/github.gif')} alt='github' />
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
