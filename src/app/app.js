/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./app.css";

import Intro from "../intro/intro";
import Home from "../home/home";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="about" element={<Home />} />
          <Route path="*" element={<Intro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
