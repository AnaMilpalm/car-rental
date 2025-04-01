import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog.jsx"));
const Product = lazy(() => import("./pages/Product/Product.jsx"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound.jsx"));

import "./App.css";

const App = () => {
  return (
    <Suspense fallback={<div>Loader...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/product:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
