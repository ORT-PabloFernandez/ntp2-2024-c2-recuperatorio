"use client"
import { useState, useEffect } from "react";
import SalesList from "./SalesList"



export default function Sale() {
    const [sales, setSales] = useState([]);


    useEffect(() => {
        
            fetch("https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setSales(data)
            })
            .catch ((eror) => console.log(eror))

}, []);

return(
    <>
    <SalesList sales = {sales}/>
    </>
)
}