import Links from './Links';
import '../css/ProductsInfo.css';

const ProductsInfo = () => {
	return (
		<article className="products-info">
			<div className="section-title">
				<h3>check our</h3>
				<h2>our products</h2>
			</div>
			<p className="product-text">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
				itaque doloribus architecto, neque pariatur modi reiciendis non ipsa in
				eos. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Perspiciatis, quia.
			</p>
			<Links label="inventory" />
		</article>
	);
};

export default ProductsInfo;
