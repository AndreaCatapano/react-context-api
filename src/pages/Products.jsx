import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";


const url = "https://jsonplaceholder.typicode.com/posts"
const Products = () => {


    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(url).
            then(res => setProducts(res.data)).catch(err => console.error(err))
    }, [])

    return (
        <div className="products-container">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <h1 className="product-title">{product.title}</h1>
                    <p className="product-body">{product.body}</p>
                    <Link key={product.id} to={`/products/${product.id}`}> Più Dettagli</Link>
                </div>
            ))}
        </div>
    )
}

export default Products;