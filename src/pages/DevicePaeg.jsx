import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceApi';

const DevicePaeg = () => {
    const whatsApp = 'https://api.whatsapp.com/send?phone=996707818717&text=%D0%AF%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E'
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    const hostApi = 'http://localhost:8000/'

    useEffect(()=>{
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <div className='d-flex row justify-content-center'>
            <div style={{width: '72%'}} className='d-flex pt-5 justify-content-between align-items-center'>
                <img style={{width:'50%'}} src={hostApi + device.img} alt="img" />
                <div style={{width: '50%'}} className='d-flex row border rounded-4 p-5'>
                    <p className='font-weight-bold fs-4'>{device.name}</p>
                    <p className='fs-6'>fewg</p>
                    <p className='fs-4 text-danger'>25000$</p>
                    <a style={{width:'150px'}} href={whatsApp} className='btn btn-outline-success fs-5 ms-2'>Заказать</a>
                </div>
            </div>
            <h1 style={{width:'100%'}} className='text-center mt-5'>Характеристики</h1>
            <div style={{width: '72%'}} className='d-flex pb-0 row gy-4 border rounded-4'>
                {device.info.map(info=>
                <>
                    <div key={info.id} className='d-flex align-items-center'>
                        <p className='font-weight-bold text-primary fs-5 m-0'>{info.title}:</p>
                        <p className='fs-5 m-0 ms-1'>{info.description}</p>
                    </div>
                    <div style={{width:'100%', height:'1px', background:'D4D4D4'}} className='d-flex'></div>
                </>    
                )}
            </div>
        </div>
    );
};

export default DevicePaeg;