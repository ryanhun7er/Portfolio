import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/style.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
	return (
		<div id='nav'>
			<nav className='navbar navbar-expand-lg'>
				<div className='container'>
					<Link className='navbar-brand' to='/'>
						R y a n W i l k i n s o n
					</Link>
					<div>
						<ul className='navbar-brand nav-item'>
							<li className='hidden'>
								<a href='#page-top'></a>
							</li>
							<Link
								to='/'
								className={
									window.location.pathname === '/' ||
									window.location.pathname === '/'
										? 'nav-link active'
										: 'nav-link'
								}>
								Home
							</Link>
							<li className='navbar-brand nav-item' href='#about'>
								<Link
									to='#about'
									className={
										window.location.pathname === '#about'
											? 'nav-link active'
											: 'nav-link'
									}>
									About
								</Link>
							</li>{' '}
							<li className='navbar-brand nav-item' href='#skills'>
								<Link
									to='#skills'
									className={
										window.location.pathname === '#skills'
											? 'nav-link active'
											: 'nav-link'
									}>
									Skills
								</Link>
							</li>{' '}
							<li className='navbar-brand nav-item' href='#portfolio'>
								<Link
									to='#portfolio'
									className={
										window.location.pathname === '#porfolio'
											? 'nav-link active'
											: 'nav-link'
									}>
									Portfolio
								</Link>
							</li>{' '}
							<li className='navbar-brand nav-item' href='#resume'>
								<Link
									to='#resume'
									className={
										window.location.pathname === '#resume'
											? 'nav-link active'
											: 'nav-link'
									}>
									Resume
								</Link>
							</li>{' '}
							<li className='navbar-brand nav-item' href='#contact'>
								<Link
									to='#contact'
									className={
										window.location.pathname === '#contact'
											? 'nav-link active'
											: 'nav-link'
									}>
									Contact
								</Link>
							</li>{' '}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
