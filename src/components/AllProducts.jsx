import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import { getAllProducts } from '../services/productService'

const AllProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(getAllProducts())
    }, [])

    return (
        <div>
            <h1><b>ALL PRODUCTS</b></h1>
            <ProductList products = {products} />
        </div>
    )
}

export default AllProducts