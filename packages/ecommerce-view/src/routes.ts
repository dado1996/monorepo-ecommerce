import { createBrowserRouter } from "react-router";
import { Layout } from "./templates/Layout";
import { Catalog } from "./pages/Catalog";
import { Cart } from "./pages/Cart";
import { Delivery } from "./pages/Delivery";
import { Admin } from "./pages/Admin";
import { Login } from "./pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Catalog },
      { path: "cart", Component: Cart },
      {
        path: "delivery",
        Component: Delivery,
      },
      { path: "admin", Component: Admin },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
]);
