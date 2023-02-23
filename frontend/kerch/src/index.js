import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/authContext';

import App from './views/app';
import Home from './views/home';
import Login from './views/login';
import Item from './views/item';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/item" element={<Item />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);
