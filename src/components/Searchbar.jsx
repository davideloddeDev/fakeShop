import "./searchbar.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import Prodotti from "./Prodotti";

export function Searchbar() {

  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("search", search);
    
  };


  return (
    <Container className="mt-5 container-searchbar">
      <Row>
        <Col sm={12}>
          <Form className="d-flex">
            <Form.Control
              onChange={handleSearch}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            >
                
            </Form.Control>
            <Button onClick={handleSubmit} href="#">
              <img className="iconButton" src="ic_search.svg" alt="search" />
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
