import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
import Cart from "./Pages/Cart";
import Header from "./Comp/Header";
import Books from "./Pages/Books";
import { CartContextProvider } from "./useContextProvider/CartContext";
import Detail from "./Pages/Detail";

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:detailId" element={<Detail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
