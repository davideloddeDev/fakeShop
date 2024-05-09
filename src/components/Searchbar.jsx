import "./searchbar.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export function Searchbar() {
  return (
    <Container className="mt-5 container-searchbar">
      <Row>
        <Col sm={12}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            >
                
            </Form.Control>
            <Button href="/carrello">
              <img className="iconButton" src="ic_search.svg" alt="search" />
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
