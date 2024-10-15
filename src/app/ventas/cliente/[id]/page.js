"use client";
import DetalleCliente from "./DetalleCliente";
import {useState, useEffect} from "react";

const PaginaCliente = ({params}) =>{
    const[cliente, setCliente] = useState([]);
    const {id} = params;

    useEffect(()=>{
        fetch("https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1")
        .then(response => response.json())
        .then((data) => {
            setCliente(data.find((venta) => venta._id ===id).customer)
        })
        .catch(error => console.log(error));
    }, []);

    return(
        <div>
            <DetalleCliente gender={cliente.gender}
                            age={cliente.age}
                            email= {cliente.email}
                            satisfaction={cliente.satisfaction}/>
        </div>
    );
}
export default PaginaCliente;