import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {getAllProducts} from '../services/productService'

const ProductDetails = () => {
    const [product, setProduct] = useState(null)
    const [hover, setHover] = useState(false)
    const {productId} = useParams()

    useEffect(() => {
        const allProducts = getAllProducts()
        const productDetail = allProducts.find(product => product.id === parseInt(productId))
        setProduct(productDetail)
    }, [productId])

    if (!product) {
        return <div>Product not found!</div>
    }

    const inventoryStatus = product.inventory > 0
        ? `${product.inventory} AVAILABLE`
        : 'SOLD OUT'

    return (
        <div style = {{ marginLeft: '30px', marginRight: '30px', marginBottom: '20px', marginTop: '10px' }}>
            <div style = {{ fontSize: '28px', marginBottom: '10px'}}><b>{product.name.toUpperCase()}</b></div>
            <div style = {{ height: '3.5px', backgroundColor: 'black', marginBottom: '10px' }}></div>
            <div style = {{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>{product.price}</div>
            <div style = {{ height: '2px', backgroundColor: 'black', marginBottom: '20px' }}></div>
            <div style = {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <img src = {product.imageUrl} alt = {product.name} style = {{ width: '100%', maxWidth: '60%', marginBottom: '20px' }} />
                <div style = {{ flexGrow: 1, maxWidth: '40%', marginLeft: '20px' }}>
                    {product.inventory > 0 ? (
                        <button onMouseEnter = {() => setHover(true)} onMouseLeave = {() => setHover(false)}
                            style = {{
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            backgroundColor: hover ? '#BDE6FF' : 'black',
                            textDecoration: hover ? 'underline' : 'none',
                            color: 'white',
                            fontSize: '20px',
                            border: 'none',
                            padding: '10px',
                            width: '100%'
                        }}>
                            <span style = {{ fontSize: '13px', fontWeight: 'bold' }}>{product.price}</span>
                            ADD TO CART
                            <span style = {{position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', fontSize: '24px', color: 'white'}}>+</span>
                        </button>
                    ) : (
                        <div></div>
                    )}
                    <div style = {{ height: '2px', backgroundColor: 'black', marginTop: '20px', marginBottom: '20px' }}></div>
                    <div style = {{ textAlign: 'center', width: '100%', fontSize: '13px', textDecoration: 'underline' }}>INVENTORY</div>
                    <div style = {{ height: '2px', backgroundColor: 'black', marginTop: '20px', marginBottom: '20px' }}></div>
                    <div style = {{ fontSize: '13px'}}>{inventoryStatus}</div>
                </div>
            </div>
            <div style = {{ height: '2px', backgroundColor: 'black' }}></div>
        </div>
    )
}

export default ProductDetails