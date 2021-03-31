import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContentDivider from './components/ContentDivider';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProductsPage from './pages/ProductsPage';
import Navbar from './components/Navbar';

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Header />
				<ContentDivider />
				<Switch>
					<Route path="/homepage" exact component={HomePage} />
					<Route path="/about" component={AboutPage} />
					<Route path="/skills" component={SkillsPage} />
					<Route path="/products" component={ProductsPage} />
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
