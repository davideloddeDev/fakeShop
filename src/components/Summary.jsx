import { CardSummary } from "./CardsSummary";
import React, { useState, useEffect } from "react";
import "./summary.css";

export function Summary() {
  const [imageSource, setImageSource] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = localStorage.getItem("productSelected");
      if (data) {
        try {
          const parsedData = JSON.parse(data);
          const prezzo = `€ ${parsedData.priceProduct}`;
          setImageSource(parsedData.imageProduct);
          setTitle(parsedData.titleProduct);
          setDescription(parsedData.descriptionProduct);
          setPrice(prezzo);
        } catch (error) {
          console.error("Error parsing JSON data:", error);
        }
      } else {
        console.log("No data found in localStorage");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="summary">
      <h2>Summary</h2>
      <CardSummary
        imgSource={imageSource}
        title={title}
        description={description}
        price={price}
      />
    </div>
  );
}
