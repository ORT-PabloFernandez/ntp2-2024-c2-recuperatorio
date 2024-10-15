'use client';

import React from "react";
export default function Items () {
const items = JSON.parse(localStorage.getItem('items'));
if (!items.length){
    return <div> NO HAY PRODUCTOS DISPONIBLES. </div>
   
}

return(
    <div>
        <h2>Detalles de el producto </h2>
    <ul>

    {items.map((sale) => {
    
    const price = parseFloat(items.price)
    const quantity = parseInt(items.quantity)

return(
        <li key= {sale.items} >
        <p> 
            <strong>Producto : </strong> {items.name}
        </p>
        <p>
            <strong>Precio : </strong> ${items.price}
        </p> 
        <p>
            <strong>Cantidad : </strong> {items.quantity}
        </p>
        <p>
            <strong>Total del Producto : </strong> ${(items.price * items.quantity)}
        </p>

        </li>
)
})}

    </ul>
        <h2>Total de venta </h2>
        <p>
            <strong>Importe TOtal : </strong> ${items.reduce(
                (total, items) => total + items.price * items.quantity )}
        </p>
    </div>
);
}
