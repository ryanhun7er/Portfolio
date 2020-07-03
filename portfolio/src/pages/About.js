import React from 'react';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import '../css/style.css';
import CardContent from '../components/CardContent';
function About() {
	return (
		<>
			<AboutMe />
			<CardContent />
			<Skills />
			<Contact />

		</>
	);
}

export default About;
