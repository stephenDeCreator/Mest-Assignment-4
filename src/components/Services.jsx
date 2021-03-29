import ServicesCard from './ServicesCard';
import ServicesTitle from './ServicesTitle';

let cards = [
	{ id: 1, img: '/product-1.jpeg', iconName: 'fas fa-mortar-pestle fa-fw' },
	{ id: 2, img: '/product-2.jpeg', iconName: 'fas fa-home fa-fw' },
	{ id: 3, img: '/product-3.jpeg', iconName: 'fas fa-mug-hot fa-fw' }
];

const Services = () => {
	return (
		<section className="services">
			<ServicesTitle />
			<div className="section-center clearfix">
				{cards.map((card) => (
					<ServicesCard
						key={card.id}
						img={card.img}
						iconName={card.iconName}
						className="service-img"
					/>
				))}
			</div>
		</section>
	);
};

export default Services;
