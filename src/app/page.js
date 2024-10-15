"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0)


const handleSeeDetails =(sale) => {
  localStorage.setItem("customer" , JSON.stringify(sale.customer)) ;
  router.push(`/customer/${sale.customer.email}`);
};
const handleSeeItems = (sale) => {
  localStorage.setItem("items", JSON.stringify(sale.items));
  router.push(`/items`);

};

  useEffect(() => {
  const fetchSales = async () => {
    try {
      const res = await fetch( `https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=${page}`);
      const data = await res.json();
      setData(data);
    }catch (error) {
      console.error("Error fetching sales: ", error);
    }
    }; 
    fetchSales();
  }, [page] );

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1 className="dark:invert">Ventas</h1>
      <section className="flex items-center gap-4 mt-4">
        <h2>Página {page + 1}</h2>  
        <button
          className="bg-blue-700 text-white px-4 py-2 rounded-md disabled:opacity-50"
          disabled={page === 0}  
          onClick={() => setPage(page - 1)}
        >
          Página Anterior
        </button>
        <button
          className="bg-blue-700 text-white px-4 py-2 rounded-md"
          onClick={() => setPage(page + 1)}
        >
          Página Siguiente
        </button>
      </section>

      <ul className="flex gap-12 flex-col p-4 cursor-pointer">
        {data.map((sale) => (
          <li key={sale.email} className="border p-4 rounded-md">
            <p>
              <strong>Fecha de Venta:</strong>{" "}
              {new Date(sale.saleDate).toLocaleDateString()}
            </p>
            <p>
              <strong>Ubicación de la Tienda:</strong> {sale.storeLocation}
            </p>
            <p>
              <strong>Método de Compra:</strong> {sale.purchaseMethod}
            </p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
              onClick={() => handleSeeDetails(sale)}  
            >
              Ver Detalles del Cliente
            </button>

            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
              onClick={() => handleSeeItems(sale)}  
            >
              Ver Detalles Productos
            </button>

          </li>
        ))}
      </ul>
    </main>
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      Todos los derechos reservados
    </footer>
  </div>
    
  );
}
