import React, { useContext, useEffect, useState } from 'react';
import AppRoutes from './components/AppRoutes';
import Navbar from './components/Navbar/Navbar';
import { observer } from 'mobx-react-lite';
import { Context } from './index';
import {check} from './http/userAPI'
import Footer from './components/Footer/Footer';

const App = observer(() => {

  const {user} =useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      check().then(data=>{
        user.setUser(true)
        user.setIsAuth(true)
      }).finally(()=>setLoading(false)) 
    }, 1000)
  }, [])

  if(loading){
    return <div style={{height:'1000px'}} className='d-flex justify-content-center align-items-center'>
      <div style={{width:'60px', height:'60px'}} class="spinner-border text-primary" role="status">
         <span class="sr-only"></span>
      </div>
    </div>
  }

  return (
    <>
      <Navbar/>
      <AppRoutes/>
      <Footer/>
    </>
    
  );
});

export default App;