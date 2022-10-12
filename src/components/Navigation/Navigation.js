import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/esm/NavLink';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'

function Navigation() {
    const menuItems = [
        {
            path:'/',
            name:'Home'
        },
        {
            path:'/about-us',
            name:'About Us'
        },
        {
            path:'/featured',
            name:'Featured'
        },
        {
            path:'/blog',
            name:'Blog'
        },
        {
            path:'/contact-us',
            name:'Contact Us'
        },
        

    ]
  return (
    <Navbar className=' container navbar' bg="light" expand="lg">
      <Container fluid className='navcontainer'>
        <Navbar.Brand className='brand'href="#">COMPANY NAME</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {
                menuItems.map((item)=>(
                    <NavLink to {...item.path} key={item.name}>
                        <div className='navitems'>{item.name}</div>
                    </NavLink>
                ))
            }
          </Nav>
          <Nav className='ms-auto'>
            <Button className='btn btn-success'>Contact Us</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default Navigation;