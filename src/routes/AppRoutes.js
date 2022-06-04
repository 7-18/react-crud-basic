import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { RegisterProduct } from "../containers/RegisterProduct";
import { ListProducts } from "../containers/ListProducts";
import { DetailsProduct } from "../containers/DetailsProduct";
import { getProducts } from "../services/getProducts";

export const AppRoutes = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<RegisterProduct />} />
        <Route path="/listProducts" element={<ListProducts />} />
        <Route path="/details/:id/:name" element={<DetailsProduct products={products} sP={setProducts}/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
