import "./tile.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function TileProduct({ titleProduct, descriptionProduct, imageProduct, priceProduct }) {
  const prezzo = priceProduct
  console.log(`prezzo: € ${prezzo}`) 
  return (
    <Card className="card-product">
      <Card.Img style={{ height: '10vh', width: '10vh' }} variant="top" src={imageProduct} />
      <Card.Body>
        <Card.Title>{titleProduct}</Card.Title>
        <Card.Text>{descriptionProduct}</Card.Text>
        <Card.Text>€ {priceProduct}</Card.Text>
        <Button variant="primary">Acquista</Button>
      </Card.Body>
    </Card>
  );
}
