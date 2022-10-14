import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Nav } from './components/Nav';
import { Route, Router, Routes } from 'react-router-dom';
import {ProductsPage} from './pages/ProductsPage'
import { Product } from './components/Product';
import { headphones } from './data/products';

function App() {
  return (
    <>
      <Nav/>
        <h1 className="font-semibold text-lg text-gray-700 mx-20">Наушники</h1>
        <Product product = {headphones[0]} />
        <Product product = {headphones[1]} />
    </>
  );
}

export default App;
