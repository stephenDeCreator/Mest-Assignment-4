import ServiceImage from './ServiceImage';
import ServicesInfo from './ServicesInfo';
import '../css/ServiceCard.css';

const ServicesCard = ({ img, iconName, className }) => {
	return (
		<article className="service-card">
			<ServiceImage img={img} iconName={iconName} className={className} />
			<ServicesInfo />
		</article>
	);
};

export default ServicesCard;
