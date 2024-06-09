import React from 'react'
import Product from './Product'
import {Link} from 'react-router-dom'

const ProductList = ( { products }) => {
    if (!products) {
        return null
    }

    return (
        <div className = 'grid-container'>
            {products.map(product => (
                <Link key = {product.id} to = {`/product-details/${product.id}`}>
                    <Product id = {product.id} imageUrl = {product.imageUrl} name = {product.name} price = {product.price} inventory = {product.inventory} />
                </Link>
            ))}
        </div>
    )
}

export default ProductList