import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('service.json')
    .then(res => res.json())
    .then(data => setServices(data))
  } , [])
  return (
    <div className='my-20'>
    <div className='text-center mb-4'>
        <p className="text-2xl font-bold text-orange-600">Services {services.length} </p>
        <h2 className="text-5xl font-semibold">Our Service Area</h2>
        <p className='mt-3'>the majority have suffered alteration in some form, <br/> by injected humour, or randomised words which don't look even slightly believable. </p>
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