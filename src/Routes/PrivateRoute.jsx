import React from 'react';
import { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext); 
    const location = useLocation();
    if(loading) return <div className='max-h-full flex items-center justify-center'>
        <progress className=" progress progress-warning w-56"></progress>
    </div>
    if(user) return children;
    return <Navigate state={{from:location}} to='/login' replace></Navigate>
};

export default PrivateRoute;