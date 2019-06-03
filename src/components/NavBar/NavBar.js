import React from 'react';
import './NavBar.css';
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class NavBar extends React.Component {
    render() {
        return (
            <div>
            <Navbar className="nav" fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home"><Image className="img" src={require("../img/favicon.ico")} responsive alt="logo"/><b className="text">Innovative Development</b> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <AnchorLink href="#aboutme" ><Nav.Link ><b>About Me</b></Nav.Link></AnchorLink>
      <AnchorLink href="#company" ><Nav.Link ><b>About the Company</b></Nav.Link></AnchorLink>
    </Nav>
    <Nav>
      <NavDropdown className="drop" title="We Develop" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action1"><b>Mobile Apps</b></NavDropdown.Item>
        <NavDropdown.Item href="#action2"><b>Websites</b></NavDropdown.Item>
        <NavDropdown.Item href="#action3"><b>Web Apps</b></NavDropdown.Item>
      </NavDropdown>
      <AnchorLink href="#contact"><Nav.Link href="#contact"><b>Contact</b></Nav.Link></AnchorLink>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
        );
    }
}

export default NavBar;