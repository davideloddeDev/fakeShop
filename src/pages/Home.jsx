import Prodotti from "../components/Prodotti";
import React, { useState, useEffect } from 'react';
import "./home.css";
import "../components/categorie.css";

export function Home() {
  const [categorie, setCategorie] = useState(null);
  const [search, setSearch] = useState(null);
  const [categoriaSelezionata, setCategoriaSelezionata] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then(res => res.json())
      .then(json => {
        setCategorie(json);
        setSearch(localStorage.getItem("search"));
      });
      console.log("search home", search);

  }, [search]);

  const handleCategoriaClick = (categoria) => {
    setCategoriaSelezionata(categoria);
  };

  return (
    <div className="home">
      <div className="container-categorie">
        <h2>Categorie</h2>
        {categorie
          ? categorie.map(categoria =>
              <div key={categoria} className="categorie">
                <a
                  className={`categoria ${categoriaSelezionata === categoria ? 'selected' : ''}`}
                  onClick={() => handleCategoriaClick(categoria)}
                >
                  {categoria}
                </a>
              </div>
            )
          : <p>Caricamento...</p>}
      </div>
      <Prodotti categorie={categoriaSelezionata} search={search} />
    </div>
  );
}
