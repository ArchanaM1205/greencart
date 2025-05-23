import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAppContext } from './context/AppContext';

import Navbar from './componennts/Navbar';
import Footer from './componennts/Footer';
import Login from './componennts/Login';

import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import ProductCategory from './pages/ProductCategory';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import AddAddress from './pages/AddAddress';
import MyOrders from './pages/MyOrders';

import SellerLogin from './componennts/seller/SellerLogin';
import SellerLayout from './pages/seller/SellerLayout';
import AddProduct from './pages/seller/AddProduct';
import ProductList from './pages/seller/ProductList';
import Orders from './pages/seller/Orders';

const App = () => {
  const location = useLocation();
  const isSellerPath = location.pathname.startsWith("/seller");
  const { showUserLogin, isSeller } = useAppContext();

  return (
    <div className="text-default min-h-screen text-gray-700 bg-white">
      {!isSellerPath && <Navbar />}
      {showUserLogin && <Login />}
      <Toaster />

      <div className={`${isSellerPath ? '' : 'px-6 md:px-16 lg:px-24 xl:px-32'}`}>
        <Routes>
          {/* User routes */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-address" element={<AddAddress />} />
          <Route path="/my-orders" element={<MyOrders />} />

          {/* Seller login */}
          <Route path="/seller" element={isSeller ? <SellerLayout /> : <SellerLogin />}>
            {isSeller && (
              <>
                <Route index element={<AddProduct />} />
                <Route path="product-list" element={<ProductList />} />
                <Route path="orders" element={<Orders />} />
              </>
            )}
          </Route>

          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>

      {!isSellerPath && <Footer />}
    </div>
  );
};

export default App;
