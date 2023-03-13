import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Contact } from './Components/Contact';
import { Galery } from './Components/Galery';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { Price } from './Components/Price';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Galerie' element={<Galery />} />
          <Route path='/Tarifs_et_Prestations' element={<Price />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;