import React, {useState} from 'react'
import TopBar from './components/TopBar'
import SideBar from './components/SideBar'
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
  const [isSideBarOpen, setSideBarOpen] = useState(false)

  const cartCount = cartItems.length;
  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <div><TopBar cartCount = {cartCount} cartTotal = {cartTotal} isSideBarOpen = {isSideBarOpen} setSideBarOpen = {setSideBarOpen} /></div>
      <div style = {{ marginLeft: isSideBarOpen ? '220px' : '0', marginTop: isSideBarOpen ? '-305px' : '0'}}>
        <img src = {startImg} alt = "Beginning Image" style = {{padding: '10px 30px 0 30px'}}></img>
        <div style = {{position: 'relative'}}>
          <div className = "grid-container">
            <div><Product imageUrl = {anemone} name = "ANEMONE PHONE STRAP" price = "$13.00 USD" /></div>
            <div><Product imageUrl = {kalina} name = "KALINA PHONE STRAP" price = "$13.00 USD" /></div>
            <div><Product imageUrl = {briar} name = "BRIAR BRACELETS" price = "$20.00 USD" /></div>
            <div><Product imageUrl = {cynthia} name = "CYNTHIA BRACELETS" price = "$20.00 USD" /></div>
            <div><Product imageUrl = {dahlia} name = "DAHLIA BRACELETS" price = "$20.00 USD" /></div>
            <div><Product imageUrl = {delphine} name = "DELPHINE BRACELETS" price = "$20.00 USD" /></div>
            <div><Product imageUrl = {rosalie} name = "ROSALIE BRACELETS" price = "$20.00 USD" /></div>
          </div>
          <div style = {{position: 'absolute', width: 'calc(100% - 60px)', height: '3px', backgroundColor: 'black', paddingTop: '2px', left: '30px'}}></div>
          <div style = {{padding: '15px 30px', display: 'flex', justifyContent: 'flex-end'}}>
            <a href = "./Pages/all.js" className = 'allProducts-link'>VIEW ALL PRODUCTS →</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
