import React from 'react'
import Header from './components/Header/Header'
import { Routes, Route, } from "react-router-dom";
import Homepage from './components/Homepage/Homepage'
import Coins from './components/Coins/Coins'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import NotFound from './components/NotFound/NotFound'
import BdAddress from './components/Contact/BdAddress'
import UsAddress from './components/Contact/UsAddress'
import CoinDetails from './components/CoinDetails/CoinDetails';


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/coins' element={<Coins />} />
        <Route path='/coin-details/:id' element={<CoinDetails />} />
        <Route path='/contact' element={<Contact />}>
          <Route path='bd-address' element={<BdAddress />} />
          <Route path='us-address' element={<UsAddress />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div >
  );
}

export default App
