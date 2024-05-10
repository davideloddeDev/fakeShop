import "./header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Searchbar } from "./components/Searchbar";

export function Header() {

  function disabledFunction() {
    alert("questo ecommerce è un'applicazione demo, non è possibile eseguire il login o registrarsi");
  }

  return (
    <div className="header">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img src="vite.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
            Nome Azienda
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              
              <Searchbar />
              <Nav.Link href="/carrello">
                <img src="ic_cart.svg" width="24" height="24" className="d-inline-block align-top" alt="" />
                <a>carrello</a>
              </Nav.Link>
              <Nav.Link onClick={disabledFunction}>
                <img src="ic_cart.svg" width="24" height="24" className="d-inline-block align-top" alt="" />
                <a>Admin</a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
