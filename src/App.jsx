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

import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="p-8 text-center">
      <h2 className="text-xl font-bold text-red-600">Something went wrong</h2>
      <p className="mt-2 text-sm text-gray-500">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="mt-4 px-4 py-2 bg-brand text-white rounded"
      >
        Try again
      </button>
    </div>
  );
}

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
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
      </ErrorBoundary>
    </Suspense>
  );
};

export default App;
