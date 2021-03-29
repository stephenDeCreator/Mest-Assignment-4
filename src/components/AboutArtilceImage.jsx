import aboutImage from '../img/about-bcg.jpeg';
import '../css/AboutArticleImage.css';

const AboutArtilceImage = () => {
	return (
		<article className="about-img">
			<div className="about-picture-container">
				<img src={aboutImage} alt="tea kettle" className="about-picture" />
			</div>
		</article>
	);
};

export default AboutArtilceImage;
