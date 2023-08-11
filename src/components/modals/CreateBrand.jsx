import React, { useState } from 'react';
import { createBrand } from '../../http/deviceApi';

const CreateBrand = ({activeBrand, setActiveBrand}) => {

    const [value, setValue] = useState('')

    const addBrand = () => {
        try{
            createBrand({name: value}).than(data => setValue(''))
            setActiveBrand(false)
        } catch(e){
            setValue('')
            setActiveBrand(false)
        }
        
    }

    return (
        <div style={{width:'100%', height:'100vh', top:'0', background:'rgba(0, 0, 0, 0.219)'}} className={activeBrand ? 'd-flex position-fixed justify-content-center align-items-center' : 'd-none'}>
            <div style={{background:'white', width:'310px'}} className='d-flex row rounded-4 p-4'>
                <div style={{width:'100%'}} className='d-flex justify-content-between align-items-center'>
                    <h1 className='fs-3 m-0'>Добавить бренд</h1>
                    <div onClick={()=>setActiveBrand(false)} style={{width:'40px', height:'40px', cursor:'pointer'}}>X</div>
                </div>
                <div className='d-flex row gy-2'>
                    <input value={value} onChange={e => setValue(e.target.value)} className='p-1' type="text" placeholder='Название бренда'/>
                </div>
                <div style={{width:'95%'}} className='d-flex justify-content-end pt-2'>
                    <button onClick={addBrand} type='button' className='btn btn-outline-success'>Добавить</button>
                </div>
            </div>
        </div>
    );
};

export default CreateBrand;