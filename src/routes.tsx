import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrderProducts from './pages/OrderProducts';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import { CartProvider } from './context/CartContext'; 
import Productspage from './pages/Productspage';
import ProductDetails from './components/ProductDetails';
import App from './App';
import AppLayout from './components/AppLayout';
import Dashboard from './pages/Dashboard';
import InventoryPage from './pages/Inventory';

const AppRoutes: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <AppLayout>
            <Dashboard />
            </AppLayout>
          } />
          <Route path="/cart" element={
            <AppLayout>
            <Cart />
            </AppLayout>
            } />
          <Route path="/products" element={
            <AppLayout>
            <Productspage />
            </AppLayout>
            } />
          <Route path="/payment" element={
            <AppLayout>
            <Payment />
            </AppLayout>
            } />
          <Route path="/order-products" element={
            <AppLayout>
            <OrderProducts />
            </AppLayout>
            } />
          <Route path="/inventory" element={
            <AppLayout>
            <InventoryPage />
            </AppLayout>
            } />
          <Route path="/products/:distributorId" element={
            <AppLayout>
            <Productspage />
            </AppLayout>
            } />
          <Route path="/product/:productId" element={
            <AppLayout>
            <ProductDetails />
            </AppLayout>
            } />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default AppRoutes;
