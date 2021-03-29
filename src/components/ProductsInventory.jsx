import '../css/ProductsInventory.css';

const ProductsInventory = ({ img, productTitle, productPrice, className }) => {
	return (
		<div className="product">
			<img src={img} alt={productTitle} className={className} />
			<h4 className="product-title">{productTitle}</h4>
			<h4 className="product-price">{productPrice}</h4>
		</div>
	);
};

export default ProductsInventory;
