import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => setServices(data))
  } , [])
  return (
    <div className='my-20'>
    <div className='text-center mb-4'>
        <p className="text-xl font-bold text-primary">Services   </p>
        <h2 className="text-5xl font-semibold">Our Service Area</h2>
        <p className='mt-3 mb-7'>The majority have suffered alteration in some form, <br/> by injected humour, or randomised words which don't look even slightly believable. </p>
    </div>
    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {  
            services.map(service => <ServiceCard
                key={service._id}
                service={service}
            ></ServiceCard>)
        }
    </div>
</div>
  );
};

export default Services;