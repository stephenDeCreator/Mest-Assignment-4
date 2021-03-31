import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Products from '../components/Products';
import Services from '../components/Services';
import Skills from '../components/Skills';

const HomePage = () => {
	return (
		<>
			<Skills />
			<About />
			<Products />
			<Services />
			<Contact />
			<Footer />
		</>
	);
};

export default HomePage;
