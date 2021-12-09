import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavBar = ({ handleSearch }) => {
    const handleChange = (e) => {
        handleSearch(e.target.value);
    };
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>Jay Mall</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link to="/dashboard">Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/product">Product</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/cart">Cart</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/favourite">Favourites</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/detail/id">Details</Link>
                            </Nav.Link>
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
