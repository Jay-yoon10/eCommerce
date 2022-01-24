import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";
const NavBar = ({ handleSearch }) => {
    const handleChange = (e) => {
        handleSearch(e.target.value);
    };
    return (
        <div>
            <Navbar expand="lg" className={styles.navbar}>
                <Container>
                    <Navbar.Brand className="fw-bold fc-white py-3">
                        Jay Mall
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={styles.navbar__selection}>
                            <Nav.Link
                                className={styles.navbar__selection__home}
                            >
                                <Link to="/">Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/product">Product</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/carts">Carts</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/favourite">Favourites</Link>
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
