import React, { useState } from 'react';
import { useRedirect, useRoutes, navigate } from 'hookrouter';
import NavBar from '../components/Navbars/NavBar';
import CreateSuspect from '../components/NewSuspect/CreateSuspect';
import SuspectDetails from '../components/NewSuspect/SuspectDetails';
import PublicNavBar from '../components/Navbars/PublicNavBar';
import Login from '../components/Account/Login';


const routes = {
    "/login": () => <Login />,
    "/register": () => <div className="h-screen flex justify-center py-16">Contact</div>,
};

const PublicRouter = () => {
    useRedirect("/", "/login");
    const pages = useRoutes(routes)
    !pages && navigate("/");
    return(
        <div>
            {/* public navbar can go here */}
            <PublicNavBar/>
            {pages}
        </div>
    )
}


export default PublicRouter
