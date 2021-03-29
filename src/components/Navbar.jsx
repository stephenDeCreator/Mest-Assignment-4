import { useState } from 'react';
import NavButton from './NavButton';
import NavItems from './NavItems';
import '../css/Navbar.css';

const Navbar = () => {
	const [showNav, setShowNav] = useState(false);

	console.log(showNav);

	return (
		<>
			<NavButton setShowNav={setShowNav} />
			<nav className={`navbar ${showNav && 'showNav'}`} id="navbar">
				<div className="navbar-header">
					<span
						className="nav-close"
						id="nav-close"
						onClick={() => setShowNav(false)}
					>
						<i className="fas fa-times"></i>
					</span>
				</div>
				<NavItems />
			</nav>
		</>
	);
};

export default Navbar;
