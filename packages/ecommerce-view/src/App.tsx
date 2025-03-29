import { createBrowserRouter, RouterProvider } from "react-router";
import { Catalog } from "./pages/Catalog";
import { Layout } from "./templates/Layout";
import { Billing } from "./pages/Billing";
import { Delivery } from "./pages/Delivery";
import { Admin } from "./pages/Admin";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Layout,
      children: [
        { index: true, Component: Catalog },
        { path: "checkout", Component: Billing },
        {
          path: "delivery",
          Component: Delivery,
        },
        { path: "admin", Component: Admin },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
