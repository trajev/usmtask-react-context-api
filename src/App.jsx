import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Checkout from './components/Checkout'
import ContextProvider from './context/context'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BakraCart from './components/BakraCart'
import BakraProducts from './components/BakraProducts'

const App = () => {
  return (


    <ContextProvider>

      <BrowserRouter>

        <Navbar />
        <div className='flex'>
          <Routes>

            <Route path="/" element={<BakraProducts />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>

          </Routes>
          <BakraCart  />
        </div>

      </BrowserRouter>

    </ContextProvider>

  )
}

export default App