import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const localLoggedIn = localStorage.getItem("isLoggedIn");
    let isLoggedIn = false
    if(!localLoggedIn || localLoggedIn === null){
        isLoggedIn = false;
    }else{
        isLoggedIn = true;
    }

    return isLoggedIn ? <Outlet/> : <Navigate to="/" replace />;
}

export default PrivateRoute