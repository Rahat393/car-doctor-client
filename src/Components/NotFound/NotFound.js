import React from 'react';
import img from '../../assets/images/notfound/404.jpg'

const NotFound = () => {
  return (
    <div>
      <img className='h-screen w-full' src={img} alt="" />
    </div>
  );
};

export default NotFound;