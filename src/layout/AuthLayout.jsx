import React from 'react';
import Logo from '../Component/Logo/Logo';
import { GiOilPump } from 'react-icons/gi';
import { Outlet } from 'react-router';
import AuthImg from '../../src/assets/authImage.png'
const AuthLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Logo></Logo>

            <div className='flex '>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>

                <div className='flex-1'>
                    <img src={AuthImg} alt="Auth" />
                </div>
            </div>

        </div>
    );
};

export default AuthLayout;