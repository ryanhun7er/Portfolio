import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Navbar from './components/Layouts/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from './components/Layouts/Footer';
import './css/style.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Navbar />

					<Wrapper>
						<Route exact path='/' component={About} />
						<Route exact path='#About' component={About} />
						<Route exact path='/Projects' component={Projects} />
						<Footer />
					</Wrapper>
				</div>
			</Router>
		);
	}
}

export default App;
