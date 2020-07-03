import React from 'react';
import About from '../components/About';
import Skills from '../components/Skills';
import CardContent from '../components/CardContent';
import Contact from '../components/Contact';
import '../css/style.css';
function Page() {
	return (
		<>
			<About />
			<Skills />
			<CardContent />
			<Contact />
		</>
	);
}

export default Page;
