import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Food from "./components/Food";
import Place from "./components/Place";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/food" element={<Food />} />
          <Route path="/place" element={<Place />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
