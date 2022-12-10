import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import Contatos from './pages/Contatos';


const RoutesApp = ()=> {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Home />} />
          <Route path="/contatos" element ={<Contatos />} />
        </Routes>
      </BrowserRouter> 
    );
}

export default RoutesApp;