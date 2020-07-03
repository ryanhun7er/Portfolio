import React from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import '../../css/style.css';
// import Navbar from 'react-bootstrap/Navbar';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
	return (
		<>
			<header id='header'>
				<div className='intro'>
					<div className='container'>
						<div className='row'>
							<div className='intro-text'>
								<h1>
									Hello, I'm <span class='name'>Ryan</span>
								</h1>
								<p>Full Stack Web Developer</p>
								<Link
									to='#about'
									className='btn btn-default btn-lg page-scroll'>
									Learn More
								</Link>{' '}
							</div>
						</div>
					</div>
				</div>
			</header>
			<div id='nav'>
				<nav className='navbar navbar-custom'>
					<div className='container'>
						<div className='navbar-header'>
							<button
								type='button'
								class='navbar-toggle'
								data-toggle='collapse'
								data-target='.navbar-main-collapse'>
								{' '}
								<i class='fa fa-bars'></i>{' '}
							</button>
							<a className='navbar-brand page-scroll' href='/about'>
								Home
							</a>{' '}
						</div>
						<div className='collapse navbar-collapse navbar-right navbar-main-collapse'>
							<ul className='nav navbar-nav'>
								<li className='hidden'>
									<a href='#page-top'></a>
								</li>
								<Link to='/'></Link>
								<li className='page-scroll' href='#about'>
									<Link to='#about'>About</Link>
								</li>{' '}
								<li className='page-scroll' href='#skills'>
									<Link to='#skills'>Skills</Link>
								</li>{' '}
								<li className='page-scroll' href='#portfolio'>
									<Link to='#portfolio'>Portfolio</Link>
								</li>{' '}
								<li className='page-scroll' href='#resume'>
									<Link to='#resume'>Resume</Link>
								</li>{' '}
								<li className='page-scroll' href='#contact'>
									<Link to='#contact'>Contact</Link>
								</li>{' '}
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</>
	);
}

export default Navbar;
