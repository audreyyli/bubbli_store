import React, {useState} from 'react'
import TopBar from './components/TopBar'

function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
  }

  const removeFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  }

  const clearCart = () => {
    setCartItems([]);
  }

  const cartCount = cartItems.length;
  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <TopBar cartCount = {cartCount} cartTotal = {cartTotal} />
      <button onClick={() => addToCart({id: 3, price: 12.99 })}>Add Item</button>
      <button onClick={() => removeFromCart(3)}>Remove Item</button>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

export default App;
