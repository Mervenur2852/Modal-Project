import React from "react"; // benim
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Test from "./pages/Test";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/test" element={<Test />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
