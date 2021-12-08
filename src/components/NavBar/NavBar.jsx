import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";

const NavBar = ({ handleSearch }) => {
    const handleChange = (e) => {
        handleSearch(e.target.value);
    };
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link to="/">Home</Nav.Link>
                            <Nav.Link to="/product">Product</Nav.Link>
                            <Nav.Link to="/cart">Cart</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div>
                        <input type="text" onChange={handleChange} />
                        <label>Search for Products</label>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
