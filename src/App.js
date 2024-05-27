import React, {useState} from 'react'
import TopBar from './components/TopBar'

function App() {
  const [cartItems] = useState([])

  const cartCount = cartItems.length;
  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <TopBar cartCount = {cartCount} cartTotal = {cartTotal} />
    </div>
  );
}

export default App;
