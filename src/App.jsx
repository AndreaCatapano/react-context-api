import { useState } from 'react'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import SingleProduct from './pages/SingleProduct.jsx'
import DefaultLayout from './layout/DefaultLayout.jsx'

import PostContext from './contexts/PostContext.jsx'


function App() {

  return (
    <PostContext.Provider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<SingleProduct />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </PostContext.Provider >
  )
}

export default App;
