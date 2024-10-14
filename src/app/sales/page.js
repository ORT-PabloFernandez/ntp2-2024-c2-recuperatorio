"use client";
import SaleList from "./SaleList";
import { useState, useEffect } from "react";

const SalePage = (props) => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetch(
      "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setSales(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <SaleList sales={sales} />
    </div>    
  );
};

export default SalePage;