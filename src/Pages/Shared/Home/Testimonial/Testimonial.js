import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import quote from '../../../../assets/icons/quote.svg'
import img1 from '../../../../assets/images/review/people2.png'

const Testimonial = () => {
  return (
    <div className='mb-28'>
      <h3 className='text-xl font-bold text-center text-primary'>Testimonial</h3>
      <h3 className='text-3xl font-bold text-center  '>What Customer Says</h3>
      <p className='text-sm text-center mt-3'>the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which don't look even slightly believable. </p>

     <div className='lg:flex justify-between gap-6 my-6'>
     <div className='border-gray-200 border-[1px] ml-10   p-8 rounded-lg'>
      <div className='flex justify-between'>
      <div className='flex'>
        <div>
        <div className="avatar">
        <div className="w-14 rounded-full">
               <img src={img1} alt='' />
          </div>
       </div>
        </div>
        <div className='ml-3'>
          <h2 className='text-xl font-bold'>Alisa Lisa</h2>
          <p>Teacher</p>
        </div>
      </div>
      <div>
        <img className='w-12 text-orange-300' src={quote} alt="" />
      </div>
      </div>
      <div>
        <p className='text-sm mb-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        <div className='flex text-center  '>
         <AiFillStar className='text-[#FF912C]'></AiFillStar>
         <AiFillStar className='text-[#FF912C]'></AiFillStar>
         <AiFillStar className='text-[#FF912C]'></AiFillStar>
         <AiFillStar className='text-[#FF912C]'></AiFillStar>
         <AiFillStar className='text-[#FF912C]'></AiFillStar>
         </div>
      </div>
      </div>
      <div className='border-gray-200 border-[1px] p-8 mr-10 rounded-lg'>
      <div className='flex justify-between'>
      <div className='flex'>
        <div>
        <div className="avatar">
        <div className="w-14 rounded-full">
               <img src={img1} alt='' />
          </div>
       </div>
        </div>
        <div className='ml-3'>
          <h2 className='text-xl font-bold'>Alisa Lisa</h2>
          <p>Teacher</p>
        </div>
      </div>
      <div>
        <img className='w-12 text-orange-300' src={quote} alt="" />
      </div>
      </div>
      <div>
        <p className='text-sm mb-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        <div className='flex text-center  '>
         <AiFillStar className='text-[#FF912C]'></AiFillStar>
         <AiFillStar className='text-[#FF912C]'></AiFillStar>
         <AiFillStar className='text-[#FF912C]'></AiFillStar>
         <AiFillStar className='text-[#FF912C]'></AiFillStar>
         <AiFillStar className='text-[#FF912C]'></AiFillStar>
         </div>
      </div>
      </div>
     </div>
    </div>
  );
};

export default Testimonial;