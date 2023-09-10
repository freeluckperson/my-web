import React from "react";
import "./Header.css";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, Navbar } from "react-bootstrap";

// function Header() {
//   return (
//     <div className="headerContainer">
//       <Navbar expand="lg" className="bg-body-tertiary">
//         <Container style={{margin:'10px'}}>
//           <Navbar.Brand href="#home">Fullstack Web Developer</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#about">About</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// }

// export default Header;


function Header() {
  return (
    <div className="headerContainer">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container style={{margin:'10px'}} >
          <Navbar.Brand style={{color: 'green '}} href="#home">Fullstack Web Developer</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link style={{color:'#8bc34a'}} href="#home">Home</Nav.Link>
              <Nav.Link style={{color:'#8bc34a'}} href="#about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
