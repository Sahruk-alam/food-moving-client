import React from 'react';
import { useForm } from "react-hook-form"
import useAuth from '../../../../hook/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLink from '../Social/SocialLink';
import axios from 'axios';
const Register = () => {
    const {register,handleSubmit,formState: { errors }}= useForm()
    const {registerUser,updateUserProfile}=useAuth()
    const location = useLocation();
    const navigate = useNavigate();
  
    const handleRegister = (data) => {
        console.log("After Register",data);
        const profileImg=data.photo[0];
        registerUser(data.email,data.password)

        .then(result=>{
            console.log(result.user)
            const formData = new FormData();
            formData.append('image', profileImg);

            const Img_url=`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`;
            axios.post(Img_url, formData)
            .then(res => {
                console.log('Image uploaded successfully:', res.data.data.url);

                const userUpdate={ 
                    displayName:data.name,
                    photoURL:res.data.data.url
                }
                updateUserProfile(userUpdate)
                .then(result=>{
                    
                    console.log("Profile Updated Successfully")
                    navigate(location?.state || '/')
                })
                .catch(error=>{
                    console.log(error.message)
                })
            })
            .catch(error => {
                console.error('Error uploading image:', error);
            });

        }).catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
               <h3 className="text-3xl text-center">Welcome to Food Moving</h3>
      <p className="text-center">Please register to create an account </p>
            <form className="card-body" onSubmit={handleSubmit(handleRegister)}>
            <fieldset className="fieldset">
          
             <label className="label">Name</label>
          <input type="text" {...register("name",
            {
                required: true
            })} className="input" placeholder="Your Name" />
            {errors.name?.type === 'required' && <p className='text-red-500'>Name is required</p>}
          
             <label className="label">Photo</label>
          <input type="file" {...register("photo",
            {
                required: true
            })} className="file-input" placeholder="Your Photo" />
            {errors.photo?.type === 'required' && <p className='text-red-500'>Photo is required</p>}
          

          <label className="label">Email</label>
          <input type="email" {...register("email",
            {
                required: true
            })} className="input" placeholder="Email" />
            {errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>}
          
          <label className="label">Password</label>
          <input type="password" {...register("password",
            {
                required: true, 
                minLength: 6,
                pattern: /(^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$)/
            })} className="input" placeholder="Password" />
            {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>} 
            {errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be at least 6 characters</p>}
            {errors.password?.type === 'pattern' && <p className='text-red-500'>Password must contain at least one uppercase letter, one lowercase letter, and one number</p>}
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
         <p className=" text-center">Already have an account? 
            <Link to="/login" 
            state={location?.state}
            className="text-blue-600 link link-hover">Login</Link></p>
            </form>
            <SocialLink></SocialLink>
        </div>
    );
};

export default Register;