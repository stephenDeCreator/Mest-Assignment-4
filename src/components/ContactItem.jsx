import '../css/ContactItem.css';

const ContactItem = (props) => {
	return (
		<div className="contact-item">
			<h4 className="contact-title">
				<span className="contact-icon">
					<i className={props.iconName}></i>
				</span>
				{props.title}
			</h4>
			<h4 className="contact-text">{props.text}</h4>
		</div>
	);
};

export default ContactItem;
