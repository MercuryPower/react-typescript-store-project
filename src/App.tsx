import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Nav } from './components/Nav';
import { Route, Router, Routes } from 'react-router-dom';
import {ProductsPage} from './pages/ProductsPage'
import { Product } from './components/Product';
import { headphones } from './data/products';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Nav/>
        <div className="flex flex-col mt-4 ">
        <h1 className="font-semibold text-lg  text-gray-700 px-5 py-2">Наушники</h1>
          <div className='flex justify-center mb-6'>
        <Product product = {headphones[0]} />
        <Product product = {headphones[1]} />
        <Product product = {headphones[2]} />
          </div>
          <div className='flex justify-center mb-6'>
        <Product product = {headphones[3]} />
        <Product product = {headphones[4]} />
        <Product product = {headphones[5]} />
          </div>
          <h1 className="font-semibold text-lg  text-gray-700 px-5 py-2">Беспроводные наушники</h1>
          <div className='flex justify-center'>
        <Product product = {headphones[6]} />
        <Product product = {headphones[7]} />
        <Product product = {headphones[8]} />
          </div>
        </div>
        <Footer/>
    </>
  );
}

export default App;
