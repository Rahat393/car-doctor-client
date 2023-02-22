import React from 'react';
import img1 from '../../../../assets/icons/person.svg'
import img2 from '../../../../assets/icons/Wrench.svg'
import img3 from '../../../../assets/icons/group.svg'
import img4 from '../../../../assets/icons/check.svg'
import img5 from '../../../../assets/icons/deliveryt.svg'

const Features = () => {
  return (
    <div className='my-16'>
      <h3 className='text-primary text-xl font-bold text-center'>Core Features</h3>
      <h3 className='  text-3xl font-bold text-center'>Why Choose Us</h3>
      <p className='text-center text-sm mt-2'>the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which don't look even slightly believable. </p>

      <div className=' lg:flex  lg:justify-evenly my-8  '>
        <div className='border-slate-200   rounded-lg border-[1px] w-36 p-2 '>
          <img className='ml-6' src={img1} alt="" />
          <h4 className='font-bold'>24/7 Support</h4>
        </div>
        <div className='border-slate-200  rounded-lg border-[1px] w-36 p-2 '>
          <img className='ml-6' src={img2} alt="" />
          <h4 className='font-bold'>Best Equipment</h4>
        </div>
        <div className='border-slate-200  rounded-lg border-[1px] w-36 p-2 '>
          <img className='ml-6' src={img3} alt="" />
          <h4 className='font-bold'>Expert Team</h4>
        </div>
        <div className='border-slate-200  rounded-lg border-[1px] w-36 p-2 '>
          <img className='ml-6' src={img4} alt="" />
          <h4 className='font-bold'>100% Guranty</h4>
        </div>
        <div className='border-slate-200  rounded-lg border-[1px] w-36 p-2 '>
          <img className='ml-6' src={img5} alt="" />
          <h4 className='font-bold'>Timely Delivery</h4>
        </div>
      </div>
    </div>
  );
};

export default Features;