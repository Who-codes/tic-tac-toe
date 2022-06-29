import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Help from "./Help";
import { Home } from "./Home";
import Navbar from "./Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
