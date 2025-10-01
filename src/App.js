// App.js
import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Signup from './Pages/Signup';  // Import the Signup component
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shopcategory from './Pages/Shopcategory';
import LoginSignup from './Pages/LoginSignup';
import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png';
import kids_banner from './components/Assets/banner_kids.png';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<Shopcategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<Shopcategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<Shopcategory banner={kids_banner} category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/signup' element={<Signup />} />  
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
