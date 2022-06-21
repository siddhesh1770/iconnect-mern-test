import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// All the components
import AddCompany from "./components/AddCompany";
import NavBar from "./components/NavBar";
import AllCompanies from "./components/AllCompanies";
import Edit from "./components/Edit";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<AllCompanies />} />
        <Route path="/addCompany" element={<AddCompany />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
