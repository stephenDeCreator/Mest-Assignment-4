import { Link } from 'react-router-dom';

const ServiceLink = (props) => {
	return (
		<div>
			<Link to="services" className="btn service-btn">
				{props.label}
			</Link>
		</div>
	);
};

export default ServiceLink;
