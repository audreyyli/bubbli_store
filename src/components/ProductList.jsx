import React from 'react'
import Product from './Product'

const ProductList = ({ products }) => {
    return (
        <div className = 'grid-container'>
            {products.map(product => (
                <div key = {product.id}>
                    <Product imageUrl = {product.imageUrl} name = {product.name} price = {product.price} />
                </div>
            ))}
        </div>
    )
}

export default ProductList