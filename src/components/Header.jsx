import HeaderLink from '../components/HeaderLink';
import '../css/Header.css';

const Header = () => {
	return (
		<header className="header">
			<div className=" banner">
				<h2>Over one hundred flavors of</h2>
				<h1>
					specially <br /> crafted tea
				</h1>
				<HeaderLink label="Explore" />
			</div>
		</header>
	);
};

export default Header;
