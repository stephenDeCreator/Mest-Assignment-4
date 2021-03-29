import { Link } from 'react-router-dom';

const HeaderLink = (props) => {
	return <Link className="btn banner-btn">{props.label}</Link>;
};

export default HeaderLink;
