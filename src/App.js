import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./Error";
import Game from "./Game";
import Help from "./Help";
import Navbar from "./Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Game />} />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
