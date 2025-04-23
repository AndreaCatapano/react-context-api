import { useState, useEffect } from "react";
import axios from "axios";
import ProductsList from '../components/ProductsList.jsx';

const url = "https://jsonplaceholder.typicode.com/posts";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    }, []);

    return <ProductsList products={products} />;
};

export default Products;