import Links from './Links';
import Paragraph from './Paragraph';
import '../css/AboutInfo.css';

const text =
	'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, ipsum.';

const AboutInfo = () => {
	return (
		<article className="about-info">
			<div className="section-title">
				<h3>about our</h3>
				<h2>tea station</h2>
			</div>
			<Paragraph text={text} className="about-text" />
			<Paragraph text={text} className="about-text" />
			<Links to="about" label="learn more" />
		</article>
	);
};

export default AboutInfo;
