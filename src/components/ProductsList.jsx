import { useContext } from "react";
import ProductCard from './ProductCard';
import PostContext from '../contexts/PostContext.jsx';


const ProductsList = () => {

    const { posts } = useContext(PostContext);

    return (
        <div className="products-container">
            {posts.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductsList;

