import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import img from '../../assets/images/checkout/checkout.png'
import { AuthContext } from '../../Contexts/AuthProvider';
import './Checkout.css'
import { toast } from 'react-hot-toast';

const CheckOut = () => {
  const { register, handleSubmit, watch, reset,  formState: { errors } } = useForm();

  const {user} = useContext(AuthContext)
  const {title, facility, price} = useLoaderData();

  const navigate = useNavigate()

  const handlePlaceOrder = data => {
     const order = {
       price: price,
       serviceName: title,
      name:data.firstName + data.lastName ,
      phone : data.phone,
      email : data.email,
      message : data.message
     }
     console.log(order);

     fetch('http://localhost:5000/orders',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
         body: JSON.stringify(order)
     })
       .then(res => res.json())
       .then(data => {
        if (data.acknowledged) {
          toast.success('Order placed successfully')
          navigate('/orders')
           reset()
      }
        console.log(data)
     })
      
     .catch(err => {
      console.log(err);
     })
  }
  
  return (
    <div  >
      <div className='relative'>
       <div className=' mt-7 mb-20 mx-auto checkout-img  '> 
           <img className='text-center mx-auto ' src={img} alt="" /> 
       </div>
       <h3 className='absolute flex justify-end transform -translate-y-1/2 left-24 top-2/4 text-3xl text-white font-semibold'>Check Out</h3>
    </div>
    <form className='bg-slate-100 p-14 mb-16 rounded-lg' onSubmit={handleSubmit(handlePlaceOrder)}>
                {/* <h2 className="text-4xl">You are about to order: {title}</h2>
                <h4 className="text-3xl">Price: {price}</h4> */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 '>
                    <input {...register("firstName", { required: true })} name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full bg-white border-none   input-bordered" />
                    <input {...register("lastName", { required: true })} name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full    bg-white border-none input-bordered" />
                    <input {...register("phone", { required: true })} name="phone" type="number" placeholder="Your Phone" className="input input-ghost w-full       bg-white border-none input-bordered"   />
                    <input {...register("email", { required: true })} name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full bg-white border-none  input-bordered" readOnly />
                </div>
                <textarea {...register("message", { required: true })} name="message" className="textarea textarea-bordered h-32 w-full mt-8 bg-white border-none" placeholder="Your Message" ></textarea>

                <input className='btn text-center w-full mt-6   border-none bg-black' type="submit" value="Place Your Order" />
            </form>
            {/* {
                facility.map((faci, i) => <p key={i}>{faci.name}</p>)
            } */}
    </div>
  );
};

export default CheckOut;