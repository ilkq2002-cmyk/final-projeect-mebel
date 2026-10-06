import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout";
import Shop from "./pages/Shop/Shop";
import Product from "./pages/Products/Product";
import Contacus from "./pages/Contacus/Contacus";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {index:true ,Component:Home},
      {
        path: "/home",
        Component:Home
      },
      {
        path: "/shop",
        Component:Shop
      },
      {
        path:"/product",
        Component:Product
      },
      {
        path:"/contactus",
        Component:Contacus
      }

    ],
  },
]);

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
