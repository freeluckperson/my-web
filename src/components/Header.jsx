import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="headerContainer">
      <Navbar expand="lg" className="custom-navbar">
        <Container style={{ margin: "10px" }}>
          <Navbar.Brand style={{ color: "green " }}>
            Fullstack Web Developer
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto custom-nav">
              <Link to="/">HOME</Link>
              <Link to="/about">ABOUT</Link>
              <Link to="/studies">STUDIES</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
