import React from 'react';
import { useRedirect, useRoutes, navigate } from 'hookrouter';
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
