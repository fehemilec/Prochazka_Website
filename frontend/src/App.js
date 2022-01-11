import React from 'react';
import './App.css';
import {useState} from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';


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
          <Route exact path="/" element={<HomeScreen/>} />
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


