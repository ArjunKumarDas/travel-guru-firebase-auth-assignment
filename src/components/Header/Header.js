import React from 'react';
import img from '../../images/icons/Logo.png';
import './Header.css';
import { Button, Form, FormControl, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  
    return (
    <div className="m-top">
      <Navbar bg="transparent" variant="light" fixed="top">
            <Navbar.Brand href="#home"><img className="logo" src={img} alt="" /></Navbar.Brand>
        
        <Form className="mr-auto" >
           <FormControl type="text" placeholder="Search your Destination" />
        </Form>
        <Nav className="manu d-flex justify-content-end">
            <Link  to="/news" className="manu-text ActiveClass">News</Link>
            <Link to="/stayinfo" className=" manu-text">Destination</Link>
            <Link to="/blog " className=" manu-text">Blog</Link>
            <Link to="/booking" className=" manu-text">Contact</Link>
            <Link to="/login" className=" manu-text">Login</Link>
        </Nav>
      </Navbar>
      </div>
    );
};

export default Header;

