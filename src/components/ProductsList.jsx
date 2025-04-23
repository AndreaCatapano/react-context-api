import ProductCard from './ProductCard';

const ProductsList = ({ products }) => {
    return (
        <div className="products-container">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductsList;

