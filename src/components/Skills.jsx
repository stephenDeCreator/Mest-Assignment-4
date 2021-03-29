import Article from './Article';
import '../css/Article.css';

let articles = [
	{ id: 1, heading: 'made in ghana', iconName: 'fas fa-mug-hot' },
	{ id: 2, heading: 'relaxation', iconName: 'fas fa-glass-cheers' },
	{ id: 3, heading: 'energy', iconName: 'fas fa-bomb' },
	{ id: 4, heading: 'family recipe', iconName: 'fas fa-mortar-pestle' }
];

const Skills = () => {
	return (
		<section className="skills clearfix">
			{articles.map((article) => (
				<Article
					key={article.id}
					heading={article.heading}
					iconName={article.iconName}
				/>
			))}
		</section>
	);
};

export default Skills;
