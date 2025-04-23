import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";

const SingleProduct = () => {
    const { posts, getPostById } = usePosts();
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        if (posts && posts.length > 0) {
            setProduct(getPostById(id));
        }
    }, [posts, id, getPostById]);

    if (!product) return <div>Caricamento...</div>;

    return (
        <div className="product-card">
            <h1 className="product-title">{product.title}</h1>
            <p className="product-body">{product.body}</p>
            <Link to="/products" className="product-details-link">Torna ai prodotti</Link>
        </div>
    );
};

export default SingleProduct;