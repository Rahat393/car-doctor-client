import React from 'react';
import { AiFillStar } from 'react-icons/ai';


const ProductsCard = ({product}) => {
  const {image, price, name} = product
  return (
    <div>
       <div className="card   w-96 h-96 my-10 bg-base-100 shadow-xl border-style">
    <figure className='rounded-xl'><img className='bg-gray-200 w-full '   src={image} alt=" " /></figure>
    <div className=" text-center mt-3">
         <div className='flex text-center ml-36'>
         <AiFillStar className='text-[#FF912C]'></AiFillStar>
         <AiFillStar className='text-[#FF912C]'></AiFillStar>
         <AiFillStar className='text-[#FF912C]'></AiFillStar>
         <AiFillStar className='text-[#FF912C]'></AiFillStar>
         <AiFillStar className='text-[#FF912C]'></AiFillStar>
         </div>
        <div className='ml-28'>
        <h2 className="card-title">{name}</h2>
        </div>
         
        <div>
        <p className='text-xl text-primary font-bold'>  ${price}</p>
        </div>
             
         
    </div>
    {/* {
        facility.map(faci => <p>{faci.name}</p>)
    } */}
</div>
    </div>
  );
};

export default ProductsCard;