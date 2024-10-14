"use client";
import "./Sale.css";
import Link from "next/link";

function Sale(props) {
  return (
    <li className="sale-item">
      <div className="card sale-item__content">
        <Link href={`/sales/${props.Id}`}>
          <div className="sale-item__info">
            <h2>Fecha de venta: {props.saleDate}</h2>
            <h2>Tienda: {props.storeLocation}</h2>
            <h3>Método de compra: {props.purchaseMethod}</h3>
          </div>
        </Link>
        <Link href={`/sales/${props.Id}/items`}>
          <button>Items de la venta</button>
        </Link>
      </div>
    </li>
  );
}

export default Sale;