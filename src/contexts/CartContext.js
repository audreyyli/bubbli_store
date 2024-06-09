import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (product) => {
        const productPrice = parseFloat(product.price.replace(/\$/g, ''))
        
        const itemFound = cartItems.find(item => item.id === product.id)

        if (itemFound) {
            alert('This product has already been added to the cart.')
        } else {
            const newItem = {...product, price: productPrice, quantity: 1}
            setCartItems(prevItems => [...prevItems, newItem])
        }
    };

    const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0)
    const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)

    return (
        <CartContext.Provider value = {{ cartItems, addToCart, cartCount, cartTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider