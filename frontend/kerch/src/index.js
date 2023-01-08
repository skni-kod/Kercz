import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShoppingCart , Home, App } from './views';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path='/home' element={<Home />} />
        <Route path='/shopping-cart' element={<ShoppingCart />} />
      </Route>
    </Routes>
  </BrowserRouter>
);