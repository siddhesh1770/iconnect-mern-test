import React from "react";
import {Container , Nav, Navbar} from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">iConnect MERN CRUD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><NavLink to={'/'}>All Companies</NavLink></Nav.Link>
            <Nav.Link><NavLink to={'/addCompany'}>Add Company</NavLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default NavBar;
