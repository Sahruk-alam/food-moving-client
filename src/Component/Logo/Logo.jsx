import React from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router';
const Logo = () => {
    return (
        <Link to="/" className="flex items-end">
            <img src={logo} alt="Logo" />
            <h3 className="text-3xl -ms-2.5 font-bold">FoodMove</h3>
        </Link>
    );
};

export default Logo;