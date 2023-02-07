import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import NotFound from "./pages/NotFound/NotFound";
import "./App.css";
import FoodCardItem from "./components/foodCard/FoodCardItem";
import FoodDetails from "./components/foodDetails/FoodDetails";
import Cart from "./components/cart/Cart";
import About from "./pages/about/About";
const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/:catId" element={<FoodCardItem />} />
        <Route path="/fooddetails/:id" element={<FoodDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
