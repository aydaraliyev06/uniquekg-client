import React, { useContext, useEffect, useState } from 'react';
import {Context} from '../../index';
import { createDevice, fetchBrands, fetchDevices, fetchTypes } from '../../http/deviceApi';
import { observer } from 'mobx-react-lite';

const CreateDevice = observer(({activeDevice, setActiveDevice}) => {
    const {device} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(()=>{
        fetchTypes().then(data=>device.setTypes(data))
        fetchBrands().then(data=>device.setBrand(data))
        fetchDevices().then(data=>device.setDevice(data))
    },[])

    const addInfo = () => {
        setInfo([...info, {title: '', description:'', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key,value,number) => {
        setInfo(info.map(i=> i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDevice = () =>{
        // console.log(device.selectedBrand.id)
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData)
    }

    return (
        <>
        <div style={{width:'100%', height:'100vh', top:'0', background:'rgba(0, 0, 0, 0.219)'}} className={activeDevice ? 'd-flex position-fixed justify-content-center align-items-center' : 'd-none'}>
            <div style={{background:'white', width:'320px'}} className='d-flex row rounded-4 p-4'>
                <div style={{width:'100%'}} className='d-flex justify-content-between align-items-center'>
                    <h1 className='fs-3 m-0'>Добавить устройство</h1>
                    <div onClick={()=>setActiveDevice(false)} style={{width:'40px', height:'40px', cursor:'pointer'}} className='d-flex justify-content-center align-items-center fs-3'>X</div>
                </div>
                <div className='d-flex row gy-2'>
                    <div className="dropup">
                        <p className='fs-5 m-0 mb-1'>Тип:</p> 
                        <select style={{width:'100%'}} className="p-1">
                            {device.types.map(type =>
                                <option onClick={device.setSelectedType(type)} type='button' key={type.id}>{type.name}</option>    
                            )}
                        </select>
                    </div>
                    <div className="dropup">
                        <p className='fs-5 m-0 mb-1'>Бренд:</p> 
                        <select style={{width:'100%'}} className="p-1">
                            {device.brands.map(brand =>
                                <option onClick={device.setSelectedBrand(brand)} type='button' key={brand.id}>{brand.name}</option>    
                            )}
                        </select>
                    </div>
                    <div className="dropup">
                        <p className='fs-5 m-0 mb-1'>Название:</p>
                        <input value={name} onChange={e => setName(e.target.value)} style={{width:'100%'}} type="text" placeholder='Введите название'/>
                    </div>
                    <div className="dropup">
                        <p className='fs-5 m-0 mb-1'>Стоимость:</p>
                        <input value={price} onChange={e => setPrice(Number(e.target.value))} style={{width:'100%'}} type="number" placeholder='Введите стоимость'/>
                    </div>
                    <div className="dropup">
                        <p className='fs-5 m-0 mb-1'>Изображение:</p>
                        <input onChange={selectFile} style={{width:'100%'}} type="file"/>
                    </div>
                    <div className='dropup'>
                        <button className='btn btn-outline-dark' onClick={()=>addInfo()}>Добавить свойство</button>
                        {info.map(i => 
                        <div key={i.number} style={{width:'100%'}} className='d-flex justify-content-center mt-2'>
                            <div className='row gy-1'>
                            <input value={i.title} onChange={(e)=>changeInfo('title', e.target.value, i.number)} type="text" placeholder='Введите название' />
                            <input value={i.description} onChange={(e)=>changeInfo('description', e.target.value, i.number)} type="text" placeholder='Введите описание' />
                            </div>
                            <button onClick={()=> removeInfo(i.number)} className='btn btn-danger'>Удалить</button>
                        </div>
                    )}
                    </div>
                </div>
                <div style={{width:'95%'}} className='d-flex justify-content-end pt-2'>
                    <button onClick={addDevice} type='button' className='btn btn-outline-success'>Добавить</button>
                    
                </div>
            </div>
        </div>
        </>
    );
});

export default CreateDevice;