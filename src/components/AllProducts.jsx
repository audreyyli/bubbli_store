import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import { getAllProducts } from '../services/productService'

const AllProducts = () => {
    const [products, setProducts] = useState([])
    const [sortType, setSortType] = useState('')

    useEffect(() => {
        let sortedProducts = getAllProducts()

        if (sortType === 'alphabetical-az') {
            sortedProducts = sortedProducts.sort((a, b) => a.name.localeCompare(b.name))
        } else if (sortType === 'alphabetical-za') {
            sortedProducts = sortedProducts.sort((a, b) => b.name.localeCompare(a.name))
        } else if (sortType === 'price-lowhigh') {
            sortedProducts = sortedProducts.sort((a, b) => parseFloat(a.price.replace(/\$/g, '')) - parseFloat(b.price.replace(/\$/g, '')))
        } else if (sortType === 'price-highlow') {
            sortedProducts = sortedProducts.sort((a, b) => parseFloat(b.price.replace(/\$/g, '')) - parseFloat(a.price.replace(/\$/g, '')))
        }

        setProducts([...sortedProducts])
    }, [sortType])

    return (
        <div>
            <div style = {{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '30px', marginBottom: '10px', marginTop: '10px'}}>
                <h1 style = {{ fontSize: '28px' }}><b>ALL PRODUCTS</b></h1>
                <div style = {{ marginRight: '30px' }}>
                    <label htmlFor = "sort"><b>SORT BY |</b></label>
                    <select id = "sort" value = {sortType} onChange = {(e) => setSortType(e.target.value)}>
                        <option value = "">SELECT</option>
                        <option value = "alphabetical-az">ALPHABETICALLY (A - Z)</option>
                        <option value = "alphabetical-za">ALPHABETICALLY (Z - A)</option>
                        <option value = "price-lowhigh">PRICE (LOW - HIGH)</option>
                        <option value = "price-highlow">PRICE (HIGH - LOW)</option>
                    </select>
                </div>
            </div>
            <div style = {{position: 'relative', marginLeft: '30px'}}>
                    <div style = {{position: 'absolute', width: 'calc(100% - 30px)', height: '2px', backgroundColor: 'black'}}></div>
            </div>
            <div style = {{ marginTop: '30px' }}>
                <ProductList products = {products} />
            </div>
        </div>
    )
}

export default AllProducts