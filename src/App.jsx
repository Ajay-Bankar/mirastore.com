import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Header from './Header'
import Products from './pages/Products'
import QRCodeGenerator from './component/QRCodeGenerator'
import Qr from './component/Qr'


function App() {
  const qrCodeValue = "https://mketech.in"; // Replace with your desired URL or data


  return (



    <div>
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='products' element={<Products />} />
        </Routes>
      </div>

      <div>
      
      </div>

      
      {/* <QRCodeGenerator value={qrCodeValue} />
      <Qr/> */}
      

    </div>
  )
}

export default App
