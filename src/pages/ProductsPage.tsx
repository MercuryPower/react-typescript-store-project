import React, { useState } from 'react';
import logo from './logo.svg';
import { Nav } from '../components/Nav';
import { Route, Router, Routes } from 'react-router-dom';
import { Product } from '../components/Product';
import { headphones } from '../data/products';
import { Footer } from '../components/Footer';
import { useSessionStorageState } from '../use-storage';

export function ProductsPage(){

    return(
    <>
      <Nav/>
        <div className="flex flex-col mt-4 ">
        <h1 className="font-semibold text-lg  text-gray-700 px-5 py-2">Наушники</h1>
          <div className='flex justify-center mb-6'>
          {headphones.slice(0,3).map(product => <Product product ={product}/>)}
          </div>
          <div className='flex justify-center mb-6'>
          {headphones.slice(3,6).map(product => <Product product ={product}/>)}
          </div>
            <h1 className="font-semibold text-lg  text-gray-700 px-5 py-2">Беспроводные наушники</h1>
          <div className='flex justify-center'>
          {headphones.slice(6,9).map(product => <Product product ={product}/>)}
          </div>
        </div>
        <Footer/>
    </>
  ); 
}