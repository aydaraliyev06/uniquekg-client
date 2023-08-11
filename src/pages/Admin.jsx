import React, { useState } from 'react';
import CreateType from '../components/modals/CreateType';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';

const Admin = () => {
    const [activeType, setActiveType] = useState(false)
    const [activeBrand, setActiveBrand] = useState(false)
    const [activeDevice, setActiveDevice] = useState(false)


    return (
        <div>
            <div style={{width:'100%', alignItems:'center', justifyContent:'center', flexDirection:'column', rowGap:'20px'}} className='d-flex mt-5'>
                <button onClick={()=>setActiveType(true)} style={{width:'250px'}} className='border rounded-4 bg-success text-white fs-5 p-3'>Добавить тип</button>
                <button onClick={()=>setActiveBrand(true)} style={{width:'250px'}} className='border rounded-4 bg-success text-white fs-5 p-3'>Добавить бренд</button>
                <button onClick={()=>setActiveDevice(true)} style={{width:'250px'}} className='border rounded-4 bg-success text-white fs-5 p-3'>Добавить машину</button>  
            </div>
            <CreateType activeType={activeType} setActiveType={setActiveType}/>
            <CreateBrand activeBrand={activeBrand} setActiveBrand={setActiveBrand}/>
            <CreateDevice activeDevice={activeDevice} setActiveDevice={setActiveDevice}/>
        </div>
    );
};

export default Admin;