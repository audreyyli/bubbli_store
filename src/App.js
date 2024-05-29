import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopBar from './components/TopBar'
import ProductList from './components/ProductList'
import ProductCategory from './components/ProductCategory'
import './styles/AppStyles.css'

import startImg from './Pictures/start.jpg'

import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Cart from './pages/cart'

const App = () => {
  const [cartItems] = useState([])
  const [isSideBarOpen, setSideBarOpen] = useState(false)

  const cartCount = cartItems.length;
  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <BrowserRouter>
      <TopBar cartCount = {cartCount} cartTotal = {cartTotal} isSideBarOpen = {isSideBarOpen} setSideBarOpen = {setSideBarOpen} />
      <div style = {{ marginLeft: isSideBarOpen ? '220px' : '0', marginTop: isSideBarOpen ? '-305px' : '0'}}>
        <img src = {startImg} alt = "Beginning Image" style = {{padding: '10px 30px 0 30px'}} />
        <ProductList />
        <div style = {{position: 'relative'}}>
            <div style = {{position: 'absolute', width: 'calc(100% - 60px)', height: '3px', backgroundColor: 'black', paddingTop: '2px', left: '30px'}}></div>
            <div style = {{padding: '15px 30px', display: 'flex', justifyContent: 'flex-end'}}>
              <a href = "./Pages/all.js" className = 'allProducts-link'>VIEW ALL PRODUCTS →</a>
            </div>
          </div>
      </div>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/products/:category" element = {<ProductCategory />} />
        <Route path = "/about" component = {<About />} />
        <Route path = "/contact" component = {<Contact />} />
        <Route path = "/cart" component = {<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
