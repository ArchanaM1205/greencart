import React from 'react'
import Navbar from './componennts/Navbar'
import Home from './pages/Home'
import { Routes, useLoaderData, useLocation } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Footer from './componennts/Footer'
import { useAppContext } from './context/AppContext'
import Login from './componennts/Login'
import AllProducts from './pages/AllProducts'
import ProductCategory from './pages/ProductCategory'


const App = () => {
  const isSellerPath=useLocation().pathname.includes("seller");
  const {showUserLogin}=useAppContext()

  return (
    <div>
      {isSellerPath?null:<Navbar/>}
      {showUserLogin?<Login/>:null}

      <Toaster></Toaster>
      
      <div className={'${isSellerPath ?"" :"px-6 md:px-16 lg:px-24 xl:px-32"}'}>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/products' element={<AllProducts/>}></Route>
          <Route path='/products/:category' element={<ProductCategory/>}></Route>
        </Routes>
      </div>
      {!isSellerPath && <Footer></Footer>}
    </div>
  )
}

export default App
