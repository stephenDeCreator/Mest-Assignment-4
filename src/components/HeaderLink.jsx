import { Link } from 'react-router-dom';

const HeaderLink = (props) => {
	return (
		<Link to="/products" className="btn banner-btn">
			{props.label}
		</Link>
	);
};

export default HeaderLink;
