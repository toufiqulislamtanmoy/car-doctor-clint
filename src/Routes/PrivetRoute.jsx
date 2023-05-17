import React, { Children, useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return (
            <div className='h-[100vh] flex items-center content-center'>
                <progress className="progress w-56 text-center"></progress>
            </div>
        )
    }

    if(user?.email){
        return children;
    }
    return <Navigate to="/login"/>;
};

export default PrivetRoute;