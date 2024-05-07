import "./tile.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function TileProduct({ titleProduct, descriptionProduct, imageProduct, priceProduct }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageProduct} />
      <Card.Body>
        <Card.Title>{titleProduct}</Card.Title>
        <Card.Text>{descriptionProduct}</Card.Text>
        <Card.Text>{priceProduct}</Card.Text>
        <Button variant="primary">Acquista</Button>
      </Card.Body>
    </Card>
  );
}
