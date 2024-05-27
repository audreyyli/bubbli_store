import React from 'react'

const Product = ({imageUrl, name, price}) => {
    return (
        <div style = {{textAlign: 'left'}}>
            <img src = {imageUrl} alt = {name} style = {{width: '100%', height: 'auto'}} />
            <h3><b>{name}</b></h3>
            <p>{price}</p>
        </div>
    )
}

export default Product