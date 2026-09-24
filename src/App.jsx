import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./home/Home";
import Login from "./auth/Login/Login";
import Register from "./auth/Register/Register";
const Menu = lazy(() => import("./menu/Menu"));
import DishDetail from "./menu/dish/DishDetail";
const Cart = lazy(() => import("./cart/Cart"));
import Checkout from "./checkout/Checkout";
import NotFound from "./NotFound";

import RequireAuth from "./auth/RequireAuth";
import AuthProvider from "./auth/AuthContext";
import PopupProvider from "./ui/PopupContext";
import Spinner from "./ui/Spinner";

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <PopupProvider>
        <AuthProvider>
            <Routes>
              <Route path="/" element={<RootLayout />}>
                {/* Public Routes */}
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="*" element={<NotFound type="page" />} />

                {/* Protected Routes */}
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
        </AuthProvider>
      </PopupProvider>
    </Suspense>
  );
};

export default App;
