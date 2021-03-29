import { NavLink } from 'react-router-dom';
import '../css/NavItem.css';
const NavItems = () => {
	return (
		<ul className="nav-items">
			<li>
				<NavLink className="nav-link" to="/homepage">
					Home
				</NavLink>
			</li>
			<li>
				<NavLink className="nav-link" to="/skills">
					Skills
				</NavLink>
			</li>
			<li>
				<NavLink className="nav-link" to="/about">
					About
				</NavLink>
			</li>
			<li>
				<NavLink className="nav-link" to="/products">
					Products
				</NavLink>
			</li>
		</ul>
	);
};

export default NavItems;
