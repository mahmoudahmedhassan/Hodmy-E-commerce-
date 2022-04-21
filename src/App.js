import React from 'react';
import './App.css';
import 'react-loading-skeleton/dist/skeleton.css';

// import pages components 
import Home from './pages/home/Home';
import User from './pages/users/User';
import Cart from './pages/cart/Cart';
import CheckOut from './pages/checkout/CheckOut'
import Details from './pages/details product/Details'
import Login from './pages/login/Login';
import Reigster from './pages/reigster/Reigster';
import NotFound from './pages/notFound/NotFound';

import { BrowserRouter, Routes, Route, } from "react-router-dom";

import { ToastContainer } from 'react-toastify';

import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector(state => state.user);

  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/user" exact element={<User />} />
          <Route path="/product/:id" exact element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={user ? <User /> : <Login />} />
          <Route path="/reigster" element={user ? <User /> : <Reigster />} />
          <Route path="/checkout" element={user ? <CheckOut />:<NotFound/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
   );
}

export default App;
