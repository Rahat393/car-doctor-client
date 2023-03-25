import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import img from '../../assets/images/login/login.svg'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { toast } from 'react-hot-toast';


const SignUp = () => {
  const { register, handleSubmit,   formState: { errors } } = useForm();
  const {createUser, updateUser} = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState("");
const navigate = useNavigate()


  const handleSignUp = data => {
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result);
        const user = result.user;
        toast.success("User Create Successfully");
        navigate("/");
        console.log(user);
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
             
          })
          .then((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
        setSignUPError(err.message);
      });
  }

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;


  return (
    <div>
       <div className="hero   min-h-screen   ">

  <div className="hero-content grid  gap-2 md:grid-cols-2 flex-col lg:flex-row ">
 
    <div className="text-center  hidden sm:block    ">
      <img className='w-4/5' src={img} alt="" />
     </div>
    <div className="card flex-shrink-0 w-full max-w-sm  border-[1px] p-7 border-gray-200 rounded-lg bg-base-100">
    <h1 className="text-3xl font-semibold text-center">Sign Up </h1>

      <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register("name", {required:true})  } name='name'  type="text" placeholder="Name" className="input input-bordered" />
          {errors.name && <span className='text-red-600'>Name is required</span>}
        </div>
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
          <input {...register("password", {required: 'Password is required', pattern: { value:passwordRegex, message: 'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'}, minLength: {value:6 ,  message: 'Password must be 6 characters or longer'}})} name='password' type="password" placeholder="password" className="input input-bordered" />
          {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
           

          {signUpError && <p className="text-red-600">{signUpError}</p>}


          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary text-white" type="submit" value="Sing In" />
           
        </div>
        <p>Already have an account? Please <span className='text-blue-600 underline'><Link to={'/login'}>Login</Link></span></p>

      </form>
    </div>
  </div>
</div>
    </div>
  );
};

export default SignUp;