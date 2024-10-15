export default function Items(props){
    const decimalPrice = props.price?.$numberDecimal;

    return(
        <li key={props._id}>
            <div>
                <h1>Item: </h1>
                <h2>Nombre: {props.name}</h2>
                <h2>Precio: ${decimalPrice}</h2>
                <h2>Cantidad: {props.quantity}</h2>
            </div>
        </li>
    );
}