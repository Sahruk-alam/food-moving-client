import React from 'react';
import { AuthContext } from '../AuthContext/AuthContext';

const AuthProvider = ({ children }) => {

    const authInfo = {

    }

    return (
        <AuthContext value={authInfo}>
       
        </AuthContext>
    );
};

export default AuthProvider;