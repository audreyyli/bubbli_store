import React from 'react'

const Product = ({id, imageUrl, name, price, inventory}) => {
    return (
        <div style = {{textAlign: 'left'}}>
            <img src = {imageUrl} alt = {name} style = {{width: '100%', height: 'auto'}} />
            <h3 style = {{marginBottom: '-4px'}}><b>{name.toUpperCase()}</b></h3>
            {inventory <= 0 ? (
                <p style = {{fontSize: '14px', fontWeight: '600', fontStyle: 'italic'}}>SOLD OUT</p>
            ) : (
            <p style = {{fontSize: '15px'}}>{price}</p>)
            }
        </div>
    )
}

export default Product