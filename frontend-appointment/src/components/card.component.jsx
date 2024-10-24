import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ServiceContext } from '../components/Layout';

const ServiceCard = ({ data }) => {
    const { setService} =  useContext(ServiceContext)
    const setData = () => {
        console.log(data)
        setService(data);
    }
    return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div className="h-48 bg-gray-200">
      <img 
        src={data.image} 
        alt={data.title} 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900">{data.title}</h3>
      <p className="mt-2 text-gray-600">{data.description}</p>
      <p className="mt-4 text-lg font-medium text-pink-600">{data.price}</p>
      <Link to="/book">
      <button 
        onClick={setData}
        href="/book" 
        className="mt-4 inline-block bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 w-full text-center"
      >
        Book Now
      </button>
      </Link>
    </div>
    </div>
    )
};

export default ServiceCard
