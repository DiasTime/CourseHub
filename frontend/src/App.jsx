import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Lessions from './pages/Lessions';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import SideBar from './components/Sidebar/SideBar';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lessions" element={<Lessions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
