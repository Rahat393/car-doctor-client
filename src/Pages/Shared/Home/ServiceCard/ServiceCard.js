import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../../Components/Button/Button';
import './ServiceCard.css'

const ServiceCard = ({service}) => {
  const { img, price, title, _id, facility } = service;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl border-style">
    <figure><img   src={img} alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-between">
        <p className='text-2xl text-primary font-semibold'>Price: ${price}</p>
            <Link to={`/checkout/${_id}`}>
                <Button  >Buy Now</Button>
            </Link>
        </div>
    </div>
    {/* {
        facility.map(faci => <p>{faci.name}</p>)
    } */}
</div>
  );
};

export default ServiceCard;