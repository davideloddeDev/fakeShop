import "./tile.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function TileProduct({ titleProduct, descriptionProduct, imageProduct, priceProduct }) {
  const prezzo = priceProduct
  const productSelected = {
    titleProduct,
    descriptionProduct,
    imageProduct,
    priceProduct,
  };
  

  function handleClick() {
    alert("Added to cart!");
    console.log("immagine: " + productSelected.imageProduct);
    console.log("titolo: " + productSelected.titleProduct);
    console.log("Descrizione: " + productSelected.descriptionProduct);
    console.log("prezzo: " + productSelected.priceProduct);

    localStorage.setItem("productSelected", JSON.stringify(productSelected));
    
  }
  return (
    <Card className="card-product">
      <Card.Img style={{ height: '10vh', width: '10vh' }} variant="top" src={imageProduct} />
      <Card.Body>
        <Card.Title>{titleProduct}</Card.Title>
        <Card.Text>{descriptionProduct}</Card.Text>
        <Card.Text>€ {priceProduct}</Card.Text>
        <Button onClick={handleClick} variant="primary">Acquista</Button>
      </Card.Body>
    </Card>
  );
}
