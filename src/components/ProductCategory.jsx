import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ProductList from './ProductList'
import { getProductsByCategory } from '../services/productService'

const ProductCategory = () => {
    const { category } = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchedProducts = getProductsByCategory(category)
        setProducts(fetchedProducts)
    }, [category])

    return (
        <div>
            <h1><b>{category.toUpperCase()}</b></h1>
            <ProductList products = { products } />
        </div>
    )
}

export default ProductCategory