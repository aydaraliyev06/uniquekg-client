import React, { useContext, useEffect} from 'react';
import { Context } from '../../index';
import img1 from './img/logo.svg';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, CONTACTS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';

const Navbar = observer(() => {
    const {user} = useContext(Context)
    const location = useNavigate()
    // useEffect(()=>{console.log(user.isAuth)}, [user.isAuth])

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-md">
                    <a className="navbar-brand" href="/">
                        <img style={{width:'200px'}} src={img1} alt="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav fs-6">
                            <li className="nav-item d-flex align-items-center">
                                <a className="nav-link px-4 text-primary" aria-current="page" href="/">Главная</a>
                            </li>
                            <li class="nav-item d-flex align-items-center text-nowrap">
                                <a className="nav-link px-4 text-primary" href="#">О компании</a>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <a className="nav-link px-4 text-primary" href={CONTACTS_ROUTE}>Контакты</a>
                            </li>
                                {
                                    user.isAuth ?
                                    <div className='navbar-nav'>
                                        <button onClick={()=>location(ADMIN_ROUTE)} type="button" className="btn btn-outline-danger me-3 fs-6">Админ панель</button>
                                        <button onClick={()=>logOut()} type="button" className="btn btn-outline-primary fs-6">Выйти</button>
                                    </div>
                                    :
                                    <div className='d-flex'>
                                        <button type="button" className="btn btn-outline-primary fs-6" onClick={()=> {location(LOGIN_ROUTE)}}>Авторизоваться</button>
                                    </div>
                                }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
});

export default Navbar;