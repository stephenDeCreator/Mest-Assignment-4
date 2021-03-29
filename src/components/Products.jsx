import ProductsInfo from './ProductsInfo';
import ProductsInventory from './ProductsInventory';
import '../css/Products.css';

let products = [
	{
		id: 1,
		img: '/product-1.jpeg',
		productTitle: 'ginger tea',
		productPrice: 'Ghc 8.99'
	},
	{
		id: 2,
		img: '/product-2.jpeg',
		productTitle: 'fruit sangria tea',
		productPrice: 'Ghc 8.99'
	},
	{
		id: 3,
		img: '/product-3.jpeg',
		productTitle: 'white tea',
		productPrice: 'Ghc 9.99'
	}
];

const Products = () => {
	return (
		<section className="products">
			<div className="section-center clearfix">
				<ProductsInfo />
				<article className="products-inventory clearfix">
					{products.map((product) => (
						<ProductsInventory
							key={product.id}
							img={product.img}
							productTitle={product.productTitle}
							productPrice={product.productPrice}
							className="product-img"
						/>
					))}
				</article>
			</div>
		</section>
	);
};

export default Products;
