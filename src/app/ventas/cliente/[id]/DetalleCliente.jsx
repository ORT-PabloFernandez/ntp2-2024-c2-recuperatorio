export default function Cliente(props){
    return(
        <li>
            <h1>Cliente:</h1>
            <h2>Genero: {props.gender}</h2>
            <h2>Edad: {props.age}</h2>
            <h2>Email: {props.email}</h2>
            <h2>Satisfacción: {props.satisfaction}</h2>
        </li>
    );
}