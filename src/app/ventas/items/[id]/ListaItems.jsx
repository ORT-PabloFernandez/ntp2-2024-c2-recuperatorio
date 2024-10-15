import DetalleItem from "./DetalleItem";

const ListaVentas = (props) =>{
    return(
        <ul>
            {props.items.map((item)=>(
            <DetalleItem
                _id={item._id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}></DetalleItem>
            ))}
        </ul>
    );
}

export default ListaVentas;