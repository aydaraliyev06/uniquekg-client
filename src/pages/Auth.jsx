import React, { useContext, useState } from 'react';
import './Auth.css';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { useLocation, useNavigate } from 'react-router-dom';
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async() => {
        try {
            let data;
            if(isLogin){
                data = await login(email, password)
            }else{
                data = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            history(SHOP_ROUTE)
        } catch(e) {
            alert(e.response.data.message)
        }
    }

    return (
        <div id='auth-box' className='d-flex justify-content-center align-items-center'>
            <div class="card">
                <h1 className='mx-auto mt-3 mb-0'>{isLogin ? 'Авторизация' : 'Регистрация'}</h1>
                <div class="card-body d-flex flex-column">
                    <input value={email} onChange={e=>setEmail(e.target.value)} placeholder='Введите ваш email...' className='mt-1' />
                    <input type='password' value={password} onChange={e=>setPassword(e.target.value)} placeholder='Введите ваш пароль...' className='mt-3' />
                    <div className='d-flex justify-content-between'>
                        {
                            isLogin ?
                            <a className='text-decoration-underline text-secondary mt-2' href={REGISTRATION_ROUTE}>Зарегистрироваться</a>
                            :
                            <a className='text-decoration-underline text-secondary mt-2' href={LOGIN_ROUTE}>Войти</a>
                        }
                        <button onClick={()=>click()} type="button" className='btn btn-success mt-3'>
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Auth;