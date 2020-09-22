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
            <Link href="/news" className="text-color">News</Link>
            <Link href="/stayinfo" className="text-color">Destination</Link>
            <Link href="/blog " className="text-color">Blog</Link>
            <Link href="/booking" className="text-color">Contact</Link>
            <Link href="/login" className="text-color">Login</Link>
        </Nav>
      </Navbar>
      </div>
    );
};

export default Header;