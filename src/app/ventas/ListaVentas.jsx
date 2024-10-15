import Venta from "./Venta";

const ListaVentas = (props) =>{
    return(
        <ul>
            {props.ventas.map((venta)=>(
                <Venta
                _id={venta._id}
                storeLocation={venta.storeLocation}
                saleDate={venta.saleDate}
                purchaseMethod={venta.purchaseMethod}></Venta>
            ))}
        </ul>
    );
}

export default ListaVentas;