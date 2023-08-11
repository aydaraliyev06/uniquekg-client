import React, { useContext } from 'react';
import {Routes, Route} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes/routes';
import { Context } from '../index';

const AppRoutes = () => {
    const {user, device} = useContext(Context)

    console.log(user, device)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component})=>(
                <Route key={path} path={path} Component={Component} exact/>
            ))}    
            {publicRoutes.map(({path, Component})=>(
                <Route key={path} path={path} Component={Component} exact/>
            ))}    
        </Routes>
    );
};

export default AppRoutes;