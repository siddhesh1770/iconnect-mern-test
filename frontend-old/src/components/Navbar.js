import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
      <AppBar className="appBar" position="static">
        <Toolbar>
          <div className="logo">iConnect CRUD Project</div>
          <NavLink to={'/'} className="tabs">All Companies</NavLink>
          <NavLink to={'/addCompany'} className="tabs">Add Company</NavLink>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
