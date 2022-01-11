import React from 'react';
import './App.css';
import {useState} from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

import Home from './components/pages/Home';
import Services from './components/pages/Services';
import AboutUs from './components/pages/AboutUs';
import Contact from './components/pages/Contact';
import Horizontal from './components/pages/Horizontal';



import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';


function App() {

  const[sideToggle, setSideToggle]=useState(false);

  return (
  
  
    <Router>  
      <Navbar click={() => setSideToggle(true)}/>
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/horizontal' element={<Horizontal />} />   
          <Route exact path="/products" element={<HomeScreen/>} />
          <Route exact path="/product/:id" element={<ProductScreen/>} />
          <Route exact path="/cart" element={<CartScreen/>} />
          <Route exact path="/shipping" element={<ShippingAddressScreen/>} />
          <Route exact path="/payment" element={<PaymentMethodScreen/>} />
          <Route exact path="/placeorder" element={<PlaceOrderScreen/>} />
        </Routes>
      </main>


    </Router>

     
  );
}

export default App;


