import ContactFormHeading from './ContactFormHeading';
import '../css/ContactForm.css';

const ContactForm = () => {
	return (
		<article className="contact-form">
			<ContactFormHeading />
			<form>
				<div className="form-group">
					<input
						type="text"
						placeholder="name"
						className="form-control"
						name="name"
					/>
					<input
						type="email"
						placeholder="email"
						className="form-control"
						name="email"
					/>
					<textarea
						name="message"
						placeholder="message"
						className="form-control"
						rows="5"
					></textarea>
				</div>
				<button type="submit" className="submit-btn btn">
					submit here
				</button>
			</form>
		</article>
	);
};

export default ContactForm;
