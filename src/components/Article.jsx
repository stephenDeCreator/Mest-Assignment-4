import Icons from './Icons';
import '../fontawesome-free-5.12.1-web/css/all.min.css';
import '../css/Article.css';
import Paragraph from './Paragraph';

const text =
	'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, ipsum.';

const Article = (props) => {
	return (
		<article className="skill">
			<Icons name={props.iconName} />
			<h4 className="skill-title">{props.heading}</h4>
			<Paragraph text={text} />
			{props.img}
		</article>
	);
};

export default Article;
