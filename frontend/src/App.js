import "./App.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// All the components
import AddCompany from "./components/AddCompany";
import NavBar from "./components/NavBar";
import AllCompanies from "./components/AllCompanies";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<AllCompanies />} />
        <Route path="/addCompany" element={<AddCompany />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
