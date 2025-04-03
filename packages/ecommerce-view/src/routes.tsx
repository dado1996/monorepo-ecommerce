import { Route, Routes } from "react-router";
import { Layout } from "./templates/Layout";
import { Catalog } from "./pages/Catalog";
import { Cart } from "./pages/Cart";
import { Billing } from "./pages/Billing";
import { Admin } from "./pages/Admin";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { Forbidden } from "./pages/Forbidden";
import PrivateRouter from "./hooks/ProtectedRoute";

export const Router = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route
        index
        element={
          <PrivateRouter authorized="client">
            <Catalog />
          </PrivateRouter>
        }
      />
      <Route
        path="cart"
        element={
          <PrivateRouter authorized="client">
            <Cart />
          </PrivateRouter>
        }
      />
      <Route
        path="bill"
        element={
          <PrivateRouter authorized="client">
            <Billing />
          </PrivateRouter>
        }
      />
      <Route
        path="admin"
        element={
          <PrivateRouter authorized="admin">
            <Admin />
          </PrivateRouter>
        }
      />
    </Route>
    <Route path="login" element={<Login />} />
    <Route path="not-found" element={<NotFound />} />
    <Route path="forbidden" element={<Forbidden />} />
  </Routes>
);
