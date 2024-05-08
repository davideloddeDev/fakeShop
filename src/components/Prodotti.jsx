import React, { useState, useEffect } from 'react';
import './prodotti.css';
import TileProduct from './TileProduct';

function Prodotti({ categorie }) {
  const [prodotti, setProdotti] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProdotti = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const categoria = categorie
          ? `https://fakestoreapi.com/products/category/${categorie}`
          : 'https://fakestoreapi.com/products';

        const response = await fetch(categoria);
        const data = await response.json();

        setProdotti(data);
      } catch (error) {
        setError('Errore durante il caricamento dei prodotti');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProdotti();
  }, [categorie]);

  useEffect(() => {
    return () => {
      // Effetto di pulizia (se necessario)
    };
  }, []);

  return (
    <div className="container-prodotti">
      {isLoading ? (
        <p>Caricamento...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        prodotti.map((prodotto) => (
          <TileProduct
            key={prodotto.id}
            titleProduct={prodotto.title}
            descriptionProduct={prodotto.description}
            imageProduct={prodotto.image}
            priceProduct={prodotto.price}
          />
        ))
      )}
    </div>
  );
}

export default Prodotti;
