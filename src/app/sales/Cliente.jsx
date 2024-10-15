import Link from "next/link";

export function ClienteI({cliente}){
    if(!cliente){
        return <div>Cargando los datos del Cliente</div>
    }
    return(
        <div>
            <h1>Genero : {cliente.gender} </h1>
            <h1>Edad : {cliente.customer.age} </h1>
            <h1>Email : {cliente.customer.email} </h1>
            <h1>Satisfaccion : {cliente.satisfaction} </h1>

        </div>


    )


}