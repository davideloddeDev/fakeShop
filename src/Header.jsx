import "./header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Searchbar } from "./components/Searchbar";

export function Header() {
  return (
    <div className="header">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img src="vite.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
            Nome Azienda
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              
              <Searchbar />
              <NavDropdown title="Categorie" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Elettronica</NavDropdown.Item>
                <NavDropdown.Item href="#">Gioielleria</NavDropdown.Item>
                <NavDropdown.Item href="#">Abbigliamento Uomo</NavDropdown.Item>
                <NavDropdown.Item href="#">Abbigliamento Donna</NavDropdown.Item>
                
                
                
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
