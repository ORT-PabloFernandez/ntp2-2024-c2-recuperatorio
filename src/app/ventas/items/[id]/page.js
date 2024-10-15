"use client";
import ListaItems from "./ListaItems";
import {useState, useEffect} from "react";

const PaginaItem = ({params})=>{
    const [items, setItems ] = useState([]);
    const {id} = params;

    useEffect(()=>{
        fetch("https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1")
        .then(response => response.json())
        .then((data) => {
                console.log(data)
                setItems(data.find((venta) => venta._id === id).items)
            })
        .catch(error => console.log(error));
    },[]);
    return(
        <div>
            <ListaItems items={items}/>
        </div>
    );
}

export default PaginaItem;