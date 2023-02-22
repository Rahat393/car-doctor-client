import React from 'react';
import img1 from '../../../../assets/images/team/1.jpg'
import img2 from '../../../../assets/images/team/2.jpg'
import img3 from '../../../../assets/images/team/3.jpg'
import {  BsFacebook, BsInstagram, BsLinkedin, BsTwitch, BsTwitter } from 'react-icons/bs';


const Team = () => {
  return (
    <div className='mt-14'>
       <h3 className='text-primary text-xl font-bold text-center'>Team</h3>
       <h2 className='text-3xl font-bold text-center'>Meet Our Team</h2>
       <p className='text-sm text-center mt-3'>the majority have suffered alteration in some form, <br /> by injected humour, or randomised words which don't look even slightly believable. </p>

       <div className='grid md:grid-cols-2 lg:grid-cols-3'>
        <div className="card   w-96 h-96 my-10 bg-base-100 shadow-xl border-style"> 
        <figure className='rounded-xl'><img className='bg-gray-200 w-full '   src={img1} alt=" " /></figure>
        <div className='text-center'>
        <h3 className='text-xl font-bold'>Car Engine Plug</h3>
        <p>Engine Expert</p>
        <div className='flex mr-3 ml-28 mt-3 text-2xl text-center'>
            <BsFacebook className='mr-2 text-blue-700'></BsFacebook>
            <BsInstagram className='mr-2 text-[#fd1d1d]'></BsInstagram>
            <BsLinkedin className='mr-2 text-[#0077b5]'></BsLinkedin>
            <BsTwitter className='mr-2 text-[#1da1f2]'></BsTwitter>
        </div>
        </div>
        </div>
        <div className="card   w-96 h-96 my-10 bg-base-100 shadow-xl border-style"> 
        <figure className='rounded-xl'><img className='bg-gray-200 w-full '   src={img2} alt=" " /></figure>
        <div className='text-center'>
        <h3 className='text-xl font-bold'>Car Engine Plug</h3>
        <p>Engine Expert</p>
        <div className='flex mr-3 ml-28 mt-3 text-2xl text-center'>
            <BsFacebook className='mr-2 text-blue-700'></BsFacebook>
            <BsInstagram className='mr-2 text-[#fd1d1d]'></BsInstagram>
            <BsLinkedin className='mr-2 text-[#0077b5]'></BsLinkedin>
            <BsTwitter className='mr-2 text-[#1da1f2]'></BsTwitter>
        </div>
        </div>
        </div>
        <div className="card   w-96 h-96 my-10 bg-base-100 shadow-xl border-style"> 
        <figure className='rounded-xl'><img className='bg-gray-200 w-full '   src={img3} alt=" " /></figure>
        <div className='text-center'>
        <h3 className='text-xl font-bold'>Car Engine Plug</h3>
        <p>Engine Expert</p>
        <div className='flex mr-3 ml-28 mt-3 text-2xl text-center'>
            <BsFacebook className='mr-2 text-blue-700'></BsFacebook>
            <BsInstagram className='mr-2 text-[#fd1d1d]'></BsInstagram>
            <BsLinkedin className='mr-2 text-[#0077b5]'></BsLinkedin>
            <BsTwitter className='mr-2 text-[#1da1f2]'></BsTwitter>
        </div>
        </div>
        </div>
       </div>
    </div>
  );
};

export default Team;