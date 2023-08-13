import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import components

import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import BookingPage from "./pages/BookingPage";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/product" element={<ProductPage/>}/>
          <Route path="/login-admin" element={<LoginPage/>}/>
          <Route path="/booking" element={<BookingPage/>}/>
        </Routes>
      </BrowserRouter>
  );
};

export default App;
