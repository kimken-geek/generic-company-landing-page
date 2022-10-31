import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/esm/NavLink';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, animateScroll as scroll } from "react-scroll";
import '../App.css'
import logo from '../Clogo.png'

function Navigation() {
  
  return (
    <Navbar className=' container navbar' expand="lg">
      <Container fluid className='navcontainer'>
        <Navbar.Brand className='brand'href="#">
        <img
              src={logo}
              width="100px"
              height="100px"
              className="d-inline-block align-top"
              alt="company logo"
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav
            className="ms-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll>
                <Nav.Link className='navitems' activeClass='active' spy={true} smooth={true} offset={-70} duration={500} href='#'>Home</Nav.Link>
                <Nav.Link className='navitems'  activeClass='active' spy={true} smooth={true} offset={-70} duration={500} href='#aboutus'>About Us</Nav.Link>
                <Nav.Link className='navitems'  activeClass='active' spy={true} smooth={true} offset={-70} duration={500} href='#Featured'>Featured</Nav.Link>
                <Nav.Link className='navitems'  activeClass='active' spy={true} smooth={true} offset={-70} duration={500} href='#contactus'>Contact Us</Nav.Link>
            </Nav>

          <Nav className='ms-auto'>
            <Button className='btn btn-16'>Contact Us</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default Navigation;