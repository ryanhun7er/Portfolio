import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Navbar from './components/Layouts/Navbar';
import About from './pages/Page';
import Footer from './components/Layouts/Footer';
import './css/style.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Navbar />

					<Wrapper>
						<Route exact path='/About' component={About} />
					</Wrapper>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
