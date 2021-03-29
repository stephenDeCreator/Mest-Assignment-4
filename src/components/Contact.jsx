import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import '../css/Contact.css';

const contacts = [
	{
		id: 1,
		title: 'address',
		iconName: 'fas fa-location-arrow',
		text: `895 Golden Street Ave Tema, Accra`
	},
	{
		id: 2,
		title: 'email',
		iconName: 'fas fa-envelope',
		text: 'stephenyeboah52@gmail.com'
	},
	{
		id: 3,
		title: 'telephone',
		iconName: 'fas fa-phone',
		text: '+233 548 338709'
	}
];

const Contact = () => {
	return (
		<section className="contact">
			<div className="section-center clearfix">
				{contacts.map((contact) => (
					<ContactInfo
						key={contact.id}
						title={contact.title}
						iconName={contact.iconName}
						text={contact.text}
					/>
				))}
				<ContactForm />
			</div>
		</section>
	);
};

export default Contact;
