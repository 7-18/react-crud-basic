import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { RegisterProduct } from "../containers/RegisterProduct";
import { ListProducts } from "../containers/ListProducts";
import { DetailsProduct } from "../containers/DetailsProduct";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<RegisterProduct />} />
        <Route path="/listProducts" element={<ListProducts />} />
        <Route path="/details/:id/:name" element={<DetailsProduct />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
