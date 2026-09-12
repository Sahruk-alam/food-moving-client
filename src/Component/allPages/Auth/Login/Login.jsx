import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hook/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLink from '../Social/SocialLink';

const Login = () => {
    const {register, handleSubmit,formState: { errors }}=useForm();
    const {signInUser} =useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = (data) => {
        console.log("After Login",data);
        signInUser(data.email,data.password)
        .then(result=>{ 
            console.log(result.user)
            navigate(location?.state || '/')
        }).catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <h3 className="text-3xl text-center">Welcome to Login</h3>
      <p className="text-center">Please login to your account </p>

      <form onSubmit={handleSubmit(handleLogin)} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" {...register("email",{required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/})} className="input" placeholder="Email" />
          {
          errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>
          }
          {
          errors.email?.type === 'pattern' && <p className='text-red-500'>Please enter a valid email address</p>
          }

          <label className="label">Password</label>
          <input type="password" {...register("password",{required: true, minLength: 6,pattern: /(^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$)/})} className="input" placeholder="Password" />
          {
          errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>
          }
          {
          errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be at least 6 characters</p>
          }
          {
          errors.password?.type === 'pattern' && <p className='text-red-500'>Password must contain at least one uppercase letter, one lowercase letter, and one number</p>
          }
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p className=" text-center">Don't have an account? <Link to="/register" 
        state={location?.state}
        className="text-blue-600 link link-hover">Sign up</Link></p>
      </form>
      <SocialLink></SocialLink>
    </div>
    );
};

export default Login; 