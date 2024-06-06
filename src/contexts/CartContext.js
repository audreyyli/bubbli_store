import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (product) => {
        const productPrice = parseFloat(product.price.replace(/\$/g, ''))
        console.log('Adding to cart:', product)
        setCartItems(prevItems => {
            const itemFound = prevItems.find(item => item.id === product.id)
            if (itemFound) {
                const newItems = prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
                console.log("Updated cart items:", newItems)
                return newItems;
            } else {
                const newItem = {...product, price: productPrice, quantity: 1}
                console.log(productPrice)
                const newItems = [...prevItems, newItem]
                console.log("New cart items:", newItems)
                return newItems
            }
        })
    };

    const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0)
    const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)

    return (
        <CartContext.Provider value = {{ cartItems, addToCart, cartCount, cartTotal }}>
            {children}
        </CartContext.Provider>
    )
}