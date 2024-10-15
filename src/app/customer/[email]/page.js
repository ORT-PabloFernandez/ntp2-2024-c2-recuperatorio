'use client';

export default function Customer () {

    const customer = JSON.parse(localStorage.getItem('customer'));
    return(
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Customer Details</h1>
          <div className="bg-white shadow rounded-lg p-6">
            <p className="text-gray-600 mb-2">Gender: {customer.gender}</p>
            <p className="text-gray-600 mb-2">Age: {customer.age}</p>
            <p className="text-gray-600 mb-2">Email: {customer.email}</p>
            <p className="text-gray-600">Satisfaction: {customer.satisfaction}</p>
          </div>
        </div>
    );
    
    }