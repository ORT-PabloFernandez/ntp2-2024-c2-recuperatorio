import "./Item.css";

export default function ItemList({ items }) {
  if (!items) {
    return <div>Cargando datos de los items...</div>;
  }

  //Itera el array de items y acumula el importe de cada item 
  //devuelve el resultado del acumulador, que inicia en 0, 
  //y el precio  (parseado a float) * cantidad del item iterado en esa vuelta
  const totalImporte = items.reduce((acumulador, item) => {
    return acumulador + (parseFloat(item.price.$numberDecimal) * item.quantity);
  }, 0);

  //.toFixed() limita a 2 decimales

  return (
    <>
      <h4 className="title">Total del importe: ${totalImporte.toFixed(2)}</h4>    
      <ul>
        {items.map(item => (
          <li className="item-item">
            <div className="card item-item__content">
              <div className="item-item__info">
                <h2> Nombre: {item.name}</h2>
                <h2> Precio: {item.price.$numberDecimal}</h2>
                <h2> Cantidad: {item.quantity}</h2>
              </div>            
            </div>          
          </li>
        ))}
      </ul>
    </>
  );
};  