import { Link } from 'react-router-dom';

const ProductsList = ({ products }) => {



    return (
        <div className="products-container">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <h1 className="product-title">{product.title}</h1>
                    <p className="product-body">{product.body}</p>
                    <Link to={`/products/${product.id}`}> Più Dettagli</Link>
                </div>
            ))}
        </div>
    )
}


export default ProductsList;

