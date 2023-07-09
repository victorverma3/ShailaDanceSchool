import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navContainer">
        <Navbar className="nav" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand className="navBrand" href="/">
              Home
            </Navbar.Brand>
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
                  <Link className="navLink" to="/timeline">
                    Timeline
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
      </div>
    </>
  );
};

export default Header;
