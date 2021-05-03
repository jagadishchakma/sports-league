import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <Navbar bg="dark" expand="lg">
        <Navbar.Brand><Link to="/">SPORTS LEAGUE</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink className="nav-link" to="/home">Home</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default Header;