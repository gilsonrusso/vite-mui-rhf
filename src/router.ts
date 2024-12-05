import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/home/Home";
import { Products } from "./pages/products/Products";
import { ProductOne } from "./pages/products/productOne/ProductOne";
import { ProductTwo } from "./pages/products/productTwo/ProductTwo";

export const router = createBrowserRouter([
  {
    path: "",
    Component: App,
    children: [
      { path: "/", Component: Home },
      {
        path: "products",
        Component: Products,
        children: [
          { index: true, Component: ProductOne },
          { path: "product-two", Component: ProductTwo },
        ],
      },
    ],
  },
]);
