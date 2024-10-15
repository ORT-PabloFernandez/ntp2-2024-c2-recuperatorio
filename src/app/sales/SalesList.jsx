import Sale from "./Sale"

export default function salesList(props){
return(
    <ul>
        {props.sales.map((sale) => {
                <Sale
                ID = {sale._id}
                saleDate = {sale.saleDate}
                Locacion = {sale.storeLocation} 
                Metodo = {sale.purchaseMethod}
                Cliente = {sale.customer}
                />

            
         } )}
    </ul>
    )
}