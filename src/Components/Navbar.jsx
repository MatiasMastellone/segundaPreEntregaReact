import { CartWidget } from "./CartWidget.jsx";
import {Logo} from "./Logo.jsx";
import { NavLink } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

export const NavBar = () => {
  return (

	<Navbar bg="dark" data-bs-theme="dark">
	<Container>
	  <Navbar.Brand href="#home"><Logo/></Navbar.Brand>
	  <Nav className="me-auto">
		<Nav.Link href="/">Home</Nav.Link>
		<Nav.Link href="/category/blonde">Blonde</Nav.Link>
		<Nav.Link href="/category/IPA">IPA</Nav.Link>
		<Nav.Link href="/category/porter">Porter</Nav.Link>
	  </Nav>
	  <CartWidget/>
	</Container>
  </Navbar>
  );
};
