import React from 'react';
import {Route,Routes} from 'react-router-dom'
import { ProductsPage } from './pages/ProductsPage';
import {CartPage} from './pages/CartPage'
import { IProduct } from './models';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
  
  return (
    <ShoppingCartProvider>
    <Routes>
      <Route path='/' element={<ProductsPage/>}/>
      <Route path='/cart' element={<CartPage/>}/>
    </Routes>
    </ShoppingCartProvider>
  );


}

export default App;
