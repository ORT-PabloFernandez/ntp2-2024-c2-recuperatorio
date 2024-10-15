import Link from "next/link";

export default function Venta(props){
    return(
        <li key={props._id}>
            <div>
                <h1>Venta: </h1>
                <h2>Fecha de venta: {props.saleDate}</h2>
                <h2>Sucursal: {props.storeLocation}</h2>
                <h2>Método de compra: {props.purchaseMethod}</h2>
            </div>
            <div>
                <Link href={`/ventas/cliente/${props._id}`}></Link>
            </div>
        </li>
    );
}