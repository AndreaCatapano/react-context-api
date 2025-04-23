import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-body">{product.body}</p>
            <Link to={`/products/${product.id}`} className="product-details-link">
                Più Dettagli
            </Link>
        </div>
    );
};

export default ProductCard;