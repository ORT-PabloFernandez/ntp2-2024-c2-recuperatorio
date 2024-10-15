import Link from "next/link";


export default function Sale(props){
    return(
        <li>
            <Link href={`/sales/${props.id}`}>
                <div>
                <h2>Datos : {props.saleDate} </h2>
                <h2>Locacion : {props.Locacion} </h2> 
                <h2>Metodo : {props.Metodo} </h2>
                <h2>Cliente : {props.Cliente} </h2>
            
                </div> 
            </Link>
        </li>

    )

}