import ProductCard from './ProductCard';
import { usePosts } from "../hooks/usePosts";

const ProductsList = () => {
    const { posts } = usePosts();

    return (
        <div className="products-container">
            {posts.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductsList;