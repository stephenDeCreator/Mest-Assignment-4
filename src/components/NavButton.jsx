import '../css/NavButton.css';
const NavButton = ({ setShowNav }) => {
	return (
		<span className="nav-btn" id="nav-btn" onClick={() => setShowNav(true)}>
			<i className="fas fa-bars"></i>
		</span>
	);
};

export default NavButton;
