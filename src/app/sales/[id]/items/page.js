"use client";
import { useState, useEffect } from "react";
import ItemList from "./ItemList.jsx";

export default function SalesDetail({params}) {
  const {id} = params;
  const [sale, setSale] = useState([]);

  useEffect(() => {
    fetch(
      "https://salesbackend.azurewebsites.net/api/sales"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSale(data.find((sale) => sale._id === id));
      })
      .catch((error) => console.log(error));
  }, []);

  return(    
    <>
      <ItemList items = {sale.items}/>
    </>
  );
};
