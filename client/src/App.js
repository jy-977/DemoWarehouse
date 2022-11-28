import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";

import Layout from "./components/Layout/Layout";
import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import NotFoundPage from "./pages/NotFound/NotFound";
import LandingPage from "./pages/Landing/Landing"
import BodyPage from "./pages/Body/Body";
import ProductsPage from "./pages/Products/Products";
import InventoryPage from "./pages/Inventory/Inventory";
function App() {
  const location = useLocation();

  useEffect(() => { window.scrollTo(0, 0); }, [location])

  return (
    <>
   
      <GlobalStyles />
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:name" element={<BodyPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Layout>
    </>
  );
}

export default App;
