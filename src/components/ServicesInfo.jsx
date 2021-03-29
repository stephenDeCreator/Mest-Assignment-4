import '../css/ServiceInfo.css';
import ServiceLink from './ServiceLink';

const ServicesInfo = () => {
	return (
		<div className="service-info">
			<h4>custom recipes</h4>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
				consequuntur. Optio provident praesentium quia nulla!
			</p>
			<ServiceLink label="read more" />
		</div>
	);
};

export default ServicesInfo;
