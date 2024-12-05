import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Products } from "./pages/products/Products";
import { ProductOne } from "./pages/products/productOne/ProductOne";
import { ProductTwo } from "./pages/products/productTwo/ProductTwo";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />}>
        <Route index element={<ProductOne />} />
        <Route path="product-two" element={<ProductTwo />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
