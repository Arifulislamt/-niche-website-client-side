import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const {user, logout} = useAuth();
    return (
        <>
            <Navbar bg="secondary" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} className="d-inline-block align-top" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="fw-bold text-dark" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="fw-bold text-dark" as={Link} to="/moreCars">More Cars</Nav.Link>
                        <Nav.Link className="fw-bold text-dark" as={Link} to="/orderNaw">Order Naw</Nav.Link>
                        <Nav.Link className="fw-bold text-dark" as={Link} to="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link className="fw-bold text-dark" as={Link} to="/register">Register</Nav.Link>
                       {
                           user?.email?
                           <Button onClick={logout} variant="dark" >LogOut</Button>
                           :
                           <Nav.Link className="fw-bold text-dark" as={Link} to="/login">Login</Nav.Link>
                           
                       }
                        <Navbar.Text>
                            <span className="text-dark fw-bold">Signed in as: </span> <a href="#login" className="name">{user?.email}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;