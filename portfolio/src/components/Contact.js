import React from 'react';
import '../css/style.css';

export default function Contact() {
	return (
		<>
			<div className='row-space' id='contact'>
				{' '}
			</div>
			<div className='contact-container text-center'>
				<div className='section-title center'>
					<h2 className='contact-title'>Contact Me</h2>

					<div className='contact-container'>
						<a className='contact-img'>
							<img
								src={require('../Assets/Images/guitar.gif')}
								width='70'
								height='70'
								alt='location'
								id='icon'
							/>
							<p>Nashville, TN</p>
						</a>

						<a className='contact-img' href='mailto:ryanhwilkinson@icloud.com'>
							{' '}
							<img
								src={require('../Assets/Images/email.gif')}
								width='70'
								height='70'
								alt='email'
							/>
						</a>

						<a
							className='contact-img'
							href='https://www.linkedin.com/in/ryanhunterwilkinson/'>
							<img
								src={require('../Assets/Images/linkedin.gif')}
								width='70'
								height='70'
								alt='linkedin'
							/>
						</a>

						<a className='contact-img' href='https://github.com/ryanhun7er'>
							<img
								src={require('../Assets/Images/github.gif')}
								width='70'
								height='70'
								alt='github'
							/>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
