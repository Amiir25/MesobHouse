import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./home/Home";
import Login from "./auth/Login/Login";
import Register from "./auth/Register/Register";
import Menu from "./menu/Menu";
import DishDetail from "./menu/DishDetail";
import Cart from "./cart/Cart";
import Checkout from "./checkout/Checkout";
import NotFound from "./NotFound";

import RequireAuth from "./auth/RequireAuth";
import AuthProvider from "./auth/AuthContext";
import CartProvider from "./cart/CartContext";
import PopupProvider from "./ui/PopupContext";

const App = () => {
  return (
    <>
      <PopupProvider>
        <AuthProvider>
          <CartProvider>
            <Routes>
              <Route path="/" element={<RootLayout />}>
                {/* Public Routes */}
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound type="page" />} />

                {/* Protected Routes */}
                <Route
                  path="/menu"
                  element={
                    <RequireAuth>
                      <Menu />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/menu/:slug"
                  element={
                    <RequireAuth>
                      <DishDetail />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/cart"
                  element={
                    <RequireAuth>
                      <Cart />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/checkout"
                  element={
                    <RequireAuth>
                      <Checkout />
                    </RequireAuth>
                  }
                />
              </Route>
            </Routes>
          </CartProvider>
        </AuthProvider>
      </PopupProvider>
    </>
  );
};

export default App;
