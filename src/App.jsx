import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog.jsx"));
const CarDetails = lazy(() => import("./pages/CarDetails/CarDetails.jsx"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound.jsx"));

import "./App.css";

const App = () => {
  return (
    <Suspense fallback={<div>Loader...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CarDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
