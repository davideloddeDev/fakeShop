import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./payment.css";

export function Payments() {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentMethodChange = e => {
    setPaymentMethod(e.target.value);
  };

  function sendPayment() {
    console.log("Payment sent");
    alert("questo ecommerce è un'applicazione demo, non è possibile effettuare pagamenti");
  }

  return (
    <div className="main-payment">
      <h2>Metodi di Pagamento</h2>
      <form>
        <div className="payment-method">
          <label>
            <input
              type="radio"
              name="payment-method"
              value="credit-card"
              checked={paymentMethod === "credit-card"}
              onChange={handlePaymentMethodChange}
            />
            Carta di Credito
          </label>
          <label>
            <input
              type="radio"
              name="payment-method"
              value="paypal"
              checked={paymentMethod === "paypal"}
              onChange={handlePaymentMethodChange}
            />
            PayPal
          </label>
          <label>
            <input
              type="radio"
              name="payment-method"
              value="bank-transfer"
              checked={paymentMethod === "bank-transfer"}
              onChange={handlePaymentMethodChange}
            />
            Bonifico Bancario
          </label>
          <label>
            <input
              type="radio"
              name="payment-method"
              value="cash-on-delivery"
              checked={paymentMethod === "cash-on-delivery"}
              onChange={handlePaymentMethodChange}
            />
            Contanti alla Consegna
          </label>
        </div>
        <div>
          <div className="card-top">
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Numero Carta</Form.Label>
              <Form.Control type="number" placeholder="Inserisci il numero della tua carta" />
            </Form.Group>
          </div>
          <div className="card-center">
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Data di scadenza</Form.Label>
              <Form.Control type="date" placeholder="Inserisci la data di scadenza della tua carta" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>CVV</Form.Label>
              <Form.Control type="number" placeholder="Inserisci il codice CVV" />
            </Form.Group>
          </div>
          <div className="card-bottom">
          <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Nome Sulla Carta</Form.Label>
              <Form.Control type="Text" placeholder="Inserisci il nome sulla tua carta" />
            </Form.Group>
          </div>
        </div>
        <br />

        <br />
        <button onClick={sendPayment} className="btn-send" type="button">Continua</button>
      </form>
    </div>
  );
}
