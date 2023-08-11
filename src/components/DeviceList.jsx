import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../index';
import DeviceItem from './DeviceItem';


const DeviceList = observer(({search}) => {
    const {device} = useContext(Context)
    const [carsList, setCarsList] = useState([])

    // const filterCars = (searchText, listOfCars) => {
    //     if(!searchText){
    //         return listOfCars
    //     }
    //     return listOfCars.filter(({listOfCars})=>{
    //         console.log(listOfCars)
    //         listOfCars.includes(searchText.toLowerCase())
    //     })
    // }

    // useEffect(()=>{
    //     setCarsList(filterCars(search, {device.devices}))
    //     console.log(carsList)
    // }, [search, device])

    return (
        <div className='d-flex flex-wrap justify-content-center'>
            {device.devices.map(device =>
                  <DeviceItem key={device.id} device={device} />  
            )}
        </div>
    );
});

export default DeviceList;