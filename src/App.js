import React, {useState} from 'react'
import TopBar from './components/TopBar'
import Product from './components/Product'
import './styles/AppStyles.css'

import startImg from './Pictures/start.jpg'
import anemone from './Pictures/anemone.jpg'
import kalina from './Pictures/kalina.jpg'
import briar from './Pictures/briar.jpg'
import cynthia from './Pictures/cynthia.jpg'
import dahlia from './Pictures/dahlia.jpg'
import delphine from './Pictures/delphine.jpg'
import rosalie from './Pictures/rosalie.jpg'

function App() {
  const [cartItems] = useState([])

  const cartCount = cartItems.length;
  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <div><TopBar cartCount = {cartCount} cartTotal = {cartTotal} /></div>
      <img src = {startImg} alt = "Beginning Image" style = {{padding: '10px 30px 0 30px'}}></img>
      <div className = "grid-container">
        <div><Product imageUrl = {anemone} name = "ANEMONE PHONE STRAP" price = "$13.00 USD" /></div>
        <div><Product imageUrl = {kalina} name = "KALINA PHONE STRAP" price = "$13.00 USD" /></div>
        <div><Product imageUrl = {briar} name = "BRIAR BRACELETS" price = "$20.00 USD" /></div>
        <div><Product imageUrl = {cynthia} name = "CYNTHIA BRACELETS" price = "$20.00 USD" /></div>
        <div><Product imageUrl = {dahlia} name = "DAHLIA BRACELETS" price = "$20.00 USD" /></div>
        <div><Product imageUrl = {delphine} name = "DELPHINE BRACELETS" price = "$20.00 USD" /></div>
        <div><Product imageUrl = {rosalie} name = "ROSALIE BRACELETS" price = "$20.00 USD" /></div>
      </div>
    </div>
  )
}

export default App;
