// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import ContentDivider from './components/ContentDivider';
import Footer from './components/Footer';
import Header from './components/Header';

import Products from './components/Products';
import Services from './components/Services';
import Skills from './components/Skills';

function App() {
	return (
		<>
			<Header />
			<ContentDivider />
			<Skills />
			<About />
			<Products />
			<Services />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
