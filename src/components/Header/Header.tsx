import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="nav-container">
        <Navbar collapseOnSelect className="nav" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand className="nav-brand" href="/">
              Home
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link eventKey="1">
                  <Link className="nav-link" to="/information">
                    Information
                  </Link>
                </Nav.Link>
                <Nav.Link eventKey="2">
                  <Link className="nav-link" to="/gallery">
                    Gallery
                  </Link>
                </Nav.Link>
                <Nav.Link eventKey="3">
                  <Link className="nav-link" to="/timeline">
                    Timeline
                  </Link>
                </Nav.Link>
                <Nav.Link eventKey="4">
                  <Link className="nav-link" to="/about">
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
