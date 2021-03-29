import ContactItem from './ContactItem';

const ContactInfo = ({ title, iconName, text }) => {
	return (
		<article className="contact-info">
			<ContactItem title={title} iconName={iconName} text={text} />
		</article>
	);
};

export default ContactInfo;
