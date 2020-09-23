import React from 'react';
import img from '../../images/icons/Logo.png';
import './Header.css';
import { Button, Form, FormControl, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <div className="text">
      <Navbar bg="transparent" variant="light" fixed="top">
            <Navbar.Brand href="#home"><img className="logo" src={img} alt="" /></Navbar.Brand>
        
        <Form className="mr-auto" >
           <FormControl type="text" placeholder="Search your Destination" />
        </Form>
        <Nav className="manu">
            <Link to="/news" className="text-color">News</Link>
            <Link to="/stayinfo" className="text-color">Destination</Link>
            <Link to="/blog " className="text-color">Blog</Link>
            <Link to="/booking" className="text-color">Contact</Link>
            <Link to="/login" className="text-color">Login</Link>
        </Nav>
      </Navbar>
      </div>
    );
};

export default Header;