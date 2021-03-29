import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProductsPage from './pages/ProductsPage';
import Navbar from './components/Navbar';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path="/homepage" exact component={HomePage} />
				<Route path="/about" component={AboutPage} />
				<Route path="/skills" component={SkillsPage} />
				<Route path="/products" component={ProductsPage} />
			</Switch>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
