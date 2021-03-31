import { NavLink } from 'react-router-dom';
import '../css/NavItem.css';
const NavItems = ({ setShowNav }) => {
	return (
		<ul className="nav-items">
			<li>
				<NavLink
					onClick={() => setShowNav(false)}
					className="nav-link"
					to="/homepage"
				>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					onClick={() => setShowNav(false)}
					className="nav-link"
					to="/skills"
				>
					Skills
				</NavLink>
			</li>
			<li>
				<NavLink
					onClick={() => setShowNav(false)}
					className="nav-link"
					to="/about"
				>
					About
				</NavLink>
			</li>
			<li>
				<NavLink
					onClick={() => setShowNav(false)}
					className="nav-link"
					to="/products"
				>
					Products
				</NavLink>
			</li>
		</ul>
	);
};

export default NavItems;
