import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/Refresh.png';

const TopBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
            REFRESH</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto mr-5">
                    <Nav.Link className="mr-4" href="#home">Home</Nav.Link>
                    <Nav.Link className="mr-4" href="#link">About</Nav.Link>
                    <Nav.Link className="mr-4" href="#link">Services</Nav.Link>
                    <Nav.Link className="mr-4" href="#link">Project</Nav.Link>
                </Nav>
                <Button variant="outline-success">Login</Button>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopBar;