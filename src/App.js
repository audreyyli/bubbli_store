import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopBar from './components/TopBar'
import ProductList from './components/ProductList'
import './styles/AppStyles.css'

import AllProducts from './pages/all'
import Bracelets from './pages/bracelets'
import Clips from './pages/clips'
import Earrings from './pages/earrings'
import About from './pages/about'
import Contact from './pages/contact'
import Cart from './pages/cart'

import startImg from './Pictures/start.jpg'
import anemone from './Pictures/anemone.jpg'
import kalina from './Pictures/kalina.jpg'
import briar from './Pictures/briar.jpg'
import cynthia from './Pictures/cynthia.jpg'
import dahlia from './Pictures/dahlia.jpg'
import delphine from './Pictures/delphine.jpg'
import rosalie from './Pictures/rosalie.jpg'

const App = () => {
  const [cartItems] = useState([])
  const [isSideBarOpen, setSideBarOpen] = useState(false)

  const cartCount = cartItems.length;
  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  const products = [
    { id: 1, imageUrl: anemone, name: "ANEMONE PHONE STRAP", price: "$13.00 USD" },
    { id: 1, imageUrl: kalina, name: "KALINA PHONE STRAP", price: "$13.00 USD" },
    { id: 2, imageUrl: briar, name: "BRIAR BRACELETS", price: "$20.00 USD" },
    { id: 2, imageUrl: cynthia, name: "CYNTHIA BRACELETS", price: "$20.00 USD" },
    { id: 2, imageUrl: dahlia, name: "DAHLIA BRACELETS", price: "$20.00 USD" },
    { id: 2, imageUrl: delphine, name: "DELPHINE BRACELETS", price: "$20.00 USD" },
    { id: 2, imageUrl: rosalie, name: "ROSALIE BRACELETS", price: "$20.00 USD" }
  ]

  return (
    <BrowserRouter>
      <TopBar cartCount = {cartCount} cartTotal = {cartTotal} isSideBarOpen = {isSideBarOpen} setSideBarOpen = {setSideBarOpen} />
      <div style = {{ marginLeft: isSideBarOpen ? '220px' : '0', marginTop: isSideBarOpen ? '-305px' : '0'}}>
        <img src = {startImg} alt = "Beginning Image" style = {{padding: '10px 30px 0 30px'}} />
        <ProductList products = {products} />
        <div style = {{position: 'relative'}}>
            <div style = {{position: 'absolute', width: 'calc(100% - 60px)', height: '3px', backgroundColor: 'black', paddingTop: '2px', left: '30px'}}></div>
            <div style = {{padding: '15px 30px', display: 'flex', justifyContent: 'flex-end'}}>
              <a href = "./Pages/all.js" className = 'allProducts-link'>VIEW ALL PRODUCTS →</a>
            </div>
          </div>
      </div>
      <Routes>
        <Route path = "/all" component = { AllProducts } />
        <Route path = "/bracelets" component = { Bracelets } />
        <Route path = "/clips" component = { Clips } />
        <Route path = "/earrings" component = { Earrings } />
        <Route path = "/about" component = { About } />
        <Route path = "/contact" component = { Contact } />
        <Route path = "/cart" component = { Cart } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
