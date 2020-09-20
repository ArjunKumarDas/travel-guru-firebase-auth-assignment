import React from 'react';
import img from '../../images/icons/Logo.png';
import './Header.css';
import { Button, Form, FormControl, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';

const Header = () => {
    return (
    <div className="text">
      <Navbar bg="transparent" variant="light" fixed="top">
            <Navbar.Brand href="#home"><img className="logo" src={img} alt="" /></Navbar.Brand>
        
        <Form className="mr-auto" >
           <FormControl type="text" placeholder="Search your Destination" />
        </Form>
        <Nav className="manu">
            <Nav.Link href="/news" className="text">News</Nav.Link>
            <Nav.Link href="/stayinfo" className="text">Destination</Nav.Link>
            <Nav.Link href="/blog " className="text">Blog</Nav.Link>
            <Nav.Link href="/booking" className="text">Contact</Nav.Link>
           <Nav.Link href="/login" className="text">Login</Nav.Link>
        </Nav>
      </Navbar>
      </div>
    );
};

export default Header;