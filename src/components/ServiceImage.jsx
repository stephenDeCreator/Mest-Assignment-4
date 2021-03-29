import '../css/ServiceImage.css';

const ServiceImage = (props) => {
	return (
		<div className="service-img-container">
			<img src={props.img} alt="single card" className={props.className} />
			<span className="service-icon">
				<i className={props.iconName}></i>
			</span>
		</div>
	);
};

export default ServiceImage;
