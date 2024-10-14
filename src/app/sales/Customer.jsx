"use client";
import "./Customer.css"

export default function Customer({propsCustomer}) {
  if (!propsCustomer) {
    return <div>Cargando datos del cliente...</div>;
  }
  return (
    <div className="customer-item">
      <div className="card customer-item__content">      
          <h2>Género: {propsCustomer.gender}</h2>
          <h2>Edad: {propsCustomer.age}</h2>
          <h2>Email: {propsCustomer.email}</h2>
          <h2>Satisfacción: {propsCustomer.satisfaction}</h2>
      </div>
    </div>
  );
};