import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRoutes as Router , Routes, Route } from 'react-router-dom';


export default function  App() {
  return (

    <>
      <Router>
        <NavBar />
          <Routes>
            <Route path="/" element={<h1> HOME </h1>} />
            <Route path="/category/:cotegoryId" element={<ItemListContainer />} />
            <Route path='/list' element={<ItemListContainer greeting={"Nuestros Productos"} />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/carrito' element={<h1>Este es el carrito</h1>} />
            <Route path='*' element={<h1>NOT FOUND 404</h1>} />
        </Routes>
      </Router>
    </>
  );
}
