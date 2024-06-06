import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Cart from './pages/cart'
import ProductCategory from './components/ProductCategory'
import AllProducts from './components/AllProducts'
import ProductDetails from './components/ProductDetails'
import { CartProvider } from './contexts/CartContext'
import './styles/AppStyles.css'


const App = () => {
  const [cartItems] = useState([])
  const [isSideBarOpen, setSideBarOpen] = useState(false)

  const cartCount = cartItems.length;
  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path = "/" element = {
            <Layout cartCount = {cartCount} cartTotal = {cartTotal} isSideBarOpen = {isSideBarOpen} setSideBarOpen = {setSideBarOpen}>
              <Home isSideBarOpen = {isSideBarOpen} />
            </Layout>
          } />
          <Route path = "/products" element = {
            <Layout cartCount = {cartCount} cartTotal = {cartTotal} isSideBarOpen = {isSideBarOpen} setSideBarOpen = {setSideBarOpen}>
              <AllProducts />
            </Layout>
          } />
          <Route path = "/products/:category" element = {
            <Layout cartCount = {cartCount} cartTotal = {cartTotal} isSideBarOpen = {isSideBarOpen} setSideBarOpen = {setSideBarOpen}>
              <ProductCategory />
            </Layout>
          } />
          <Route path = "/product-details/:productId" element = {
            <Layout cartCount = {cartCount} cartTotal = {cartTotal} isSideBarOpen = {isSideBarOpen} setSideBarOpen = {setSideBarOpen}>
              <ProductDetails />
            </Layout>
          } />
          <Route path = "/about" element = {
            <Layout cartCount = {cartCount} cartTotal = {cartTotal} isSideBarOpen = {isSideBarOpen} setSideBarOpen = {setSideBarOpen}>
              <About />
            </Layout>
          } />
          <Route path = "/contact" element = {
            <Layout cartCount = {cartCount} cartTotal = {cartTotal} isSideBarOpen = {isSideBarOpen} setSideBarOpen = {setSideBarOpen}>
              <Contact />
            </Layout>
          } />
          <Route path = "/cart" element = {
            <Layout cartCount = {cartCount} cartTotal = {cartTotal} isSideBarOpen = {isSideBarOpen} setSideBarOpen = {setSideBarOpen}>
              <Cart />
            </Layout>
          } />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App;
