import { Payments } from "../components/Payments";
import { Summary } from "../components/Summary";
import "./carrello.css"

export function Carrello() {
  return (
    <div className="main-carrello">
      <div className="container-payment">
        <Payments />
      </div>
      <div className="container-summary">
        <Summary />
      </div>
    </div>
  );
}