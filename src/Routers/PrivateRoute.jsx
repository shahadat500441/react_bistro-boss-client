import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './../provider/AuthProvider';
import { useLocation,Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <progress className="progress progress-secondary w-56" value="70" max="100"></progress>
    }
    if(user){
        children
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>;
};

export default PrivateRoute;