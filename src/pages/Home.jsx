import { Categorie } from "../components/Categorie";
import { Prodotti } from "../components/Prodotti";
import "./home.css";
export function Home() {
  return (
    <div className="home">
      <Categorie
        txtcat1="elettronica"
        imgCat1="catElettronica.jpeg"
        txtcat2="Gioielli"
        imgCat2="catGioielleria.jpeg"
        txtcat3="Abbigliamento Uomo"
        imgCat3="catUomo.jpeg"
        txtcat4="Abbigliamento Donna"
        imgCat4="catDonna.jpeg"
      />
      <Prodotti />
    </div>
  );
}
