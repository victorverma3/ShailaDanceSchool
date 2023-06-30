import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div className="navContainer">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Link className="navLink" to="/information">
                  Information
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="navLink" to="/gallery">
                  Gallery
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="navLink" to="/contact">
                  Contact
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="navLink" to="/about">
                  About
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default Header;
