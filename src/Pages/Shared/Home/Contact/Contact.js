import React from 'react';
import { SlCalender } from 'react-icons/sl';
import { BsTelephone  } from 'react-icons/bs';
import { ImLocation  } from 'react-icons/im';


const Contact = () => {
  return (
    <div className='bg-black text-white mb-10 flex justify-around p-20 rounded-lg'>
      <div className='flex'>
        <div className='mt-3 mb-2  mr-5 text-4xl text-primary'>
              <SlCalender></SlCalender>
        </div>
        <div>
            <p className='text-xl font-semibold'>We are open monday-friday</p>
            <h3>7:00 am - 9:00 pm</h3>
        </div>
      </div>
      <div className='flex'>
        <div className='mt-3 mb-2  mr-5 text-4xl text-primary'>
              <BsTelephone></BsTelephone>
        </div>
        <div>
             <p className='text-xl font-semibold'>Have a question?</p>
             <h3>+2546 251 2658</h3>
        </div>
      </div>
      <div className='flex'>
        <div className='mt-3 mb-2 mr-5  text-4xl text-primary'   >
              <ImLocation></ImLocation>
        </div>
        <div>
           <p className='text-xl font-semibold'>Need a repair? our address</p>
           <h3>Liza Street, New York</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;