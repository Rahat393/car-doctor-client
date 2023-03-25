import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
 
import img from '../assets/images/login/login.svg'
import { AuthContext } from '../Contexts/AuthProvider';


const LogIn = () => {
  const { register, handleSubmit,   formState: { errors } } = useForm();
  const [loginError, setLoginError] = useState('');
  const {signIn} = useContext(AuthContext)
  const navigate = useNavigate()


  const handleLogin = data => {
    setLoginError('')
    signIn(data.email, data.password)
    .then(result => {
        console.log(result);
         navigate('/')
    })
    .catch(error => {
        console.log(error)
        setLoginError(error.message)
    })
  }

 

  return (
    <div>
       <div className="hero -mt-20 min-h-screen  ">

  <div className="hero-content grid  gap-2 md:grid-cols-2 flex-col lg:flex-row ">
 
    <div className="text-center  hidden sm:block    ">
      <img className='w-4/5' src={img} alt="" />
     </div>
    <div className="card flex-shrink-0 w-full max-w-sm  border-[1px] p-7 border-gray-200 rounded-lg bg-base-100">
    <h1 className="text-3xl font-semibold text-center">Login </h1>

      <form onSubmit={handleSubmit(handleLogin)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register("email", {required:true})  } name='email'  type="email" placeholder="email" className="input input-bordered" />
          {errors.email && <span className='text-red-600'>Email is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input {...register("password", {required: 'Password is required'})} name='password' type="password" placeholder="password" className="input input-bordered" />
          {/* {errors.password && <p className='text-red-600'>{errors.password?.message}</p>} */}
          {errors.password && <p className='text-red-600'> Password is incorrect</p>}
           

          <label className="label">
            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary text-white" type="submit" value="Sing In" />
           
        </div>
        <div>
                        {loginError && <p className='text-red-600'> Your Email or Passworrd is incorrect</p>}
                    </div>
        <p>New to car doctor ? Please <span className='text-blue-600 underline'><Link to={'/signup'}>create a new account</Link></span></p>
      </form>
    </div>
  </div>
</div>
    </div>
  );
};

export default LogIn;