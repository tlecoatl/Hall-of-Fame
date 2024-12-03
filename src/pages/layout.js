import {Link} from "react-router-dom";
import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import styles from './NavBar.module.css';

const Layout = () => {
  return (
    <Navbar bg="light" expand="lg" className={styles.navbar}>
    <Container className={styles.navbarContainer}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="/" className={styles.navlink}>Home</Link>
          <Link to="/legends" className={styles.navLink}>Legends</Link>
          <Link to="/create" className={styles.navLink}>Create</Link>
          <Link to="/contact" className={styles.navLink}>Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Layout;
