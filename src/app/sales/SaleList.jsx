import "./Sale.css";
import Sale from "./Sale";

const SaleList = (props) => {
    return (
      <ul>
        {props.sales.map((sale) => (
          <Sale            
            Id = {sale._id}
            saleDate={sale.saleDate}
            storeLocation={sale.storeLocation}
            purchaseMethod={sale.purchaseMethod}
            costumer={sale.costumer}
          />
        ))}
      </ul>
    );
  };
  
  export default SaleList;