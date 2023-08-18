import React from 'react';
import Product from './components/Product';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Cart from './components/cart';
import SignUp from './components/signUp';
import Footer from './components/footer';
import ProductsList from './components/productsList';
import Head from './components/head'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import ProductDetail from './components/ProductDetail';
import Login from './components/logIn';
function App() {
  return (
    <BrowserRouter>
      <Head/>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/productlist' element={<ProductsList />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/product' element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
