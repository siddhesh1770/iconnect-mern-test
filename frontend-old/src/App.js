import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// All the components
import AddCompany from "./components/AddCompany";
import Navbar from "./components/Navbar";
import AllCompanies from "./components/AllCompanies";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<AllCompanies />} />
        <Route path="/addCompany" element={<AddCompany />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
