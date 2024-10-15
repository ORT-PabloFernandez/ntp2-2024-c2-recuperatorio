export default function items({sale}){
    const items  = sale.items;
    items.map((item) => {
        return(
            <div>
                <h1>Nombre : {item.name}</h1>
                <h1>Precio : {item.price}</h1>
                <h1>Cantidad : {item.quantity}</h1>

            </div>
        )

        
    }
,[])}