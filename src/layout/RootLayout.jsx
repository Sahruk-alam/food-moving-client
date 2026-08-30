import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../shared/footer/footer';
import Navbar from '../shared/navbar/Navbar';
import Home from '../pages/home/Home';

const RootLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            {/* <Home></Home> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;