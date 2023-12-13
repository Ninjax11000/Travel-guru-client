import React from 'react';
import { useContext } from 'react';

import { Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext); 
    if(loading) return <div className='max-h-full flex items-center justify-center'>
        <progress className=" progress progress-warning w-56"></progress>
    </div>
    if(user) return children;
    return <Navigate  to='/login' replace></Navigate>
};

export default PrivateRoute;