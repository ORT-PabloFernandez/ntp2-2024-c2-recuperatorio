"use client"
import { useState, useEffect } from "react";
import { items } from "../sales/item";


export default function Cliente({params}) {
    const { id } = params;
    const [ sale, setSale ] = useState([]);

    useEffect(() => {
        fetch("https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1")
        .then((response) => response.json())
        .then((data) => setSale(data.find((sale) => sale._id === id)))
        .catch((e) => console.error(e))
    }, []);

    return(
        <>
         <items sale={sale} />
        </>
    )
}