import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Categories from './pages/Categories';
import Home from "./pages/Home";
import Product from './pages/Product';

const App = () => (
  <div className='container'>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="product" element={<Product />} />
    <Route path="categories" element={<Categories />} />
  </Routes>
  </div>
);

export default App;
