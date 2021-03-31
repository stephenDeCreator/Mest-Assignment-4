import { Link } from 'react-router-dom';

const Links = (props) => {
	return (
		<Link to="#" className="btn">
			{props.label}
		</Link>
	);
};

export default Links;
