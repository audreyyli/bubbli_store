import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ProductList from './ProductList'
import { getProductsByCategory } from '../services/productService'

const ProductCategory = () => {
    const { category } = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const fetchedProducts = await getProductsByCategory(category)
                setProducts(fetchedProducts)
            } catch (error) {
                console.error('Failed to fetch products:', error)
            }
        }

        fetchProducts()
    }, [category])

    return (
        <div>
            <h1>{category.toUpperCase()}</h1>
            <ProductList products = { products } />
        </div>
    )
}

export default ProductCategory