import React, { useContext, useEffect, useState } from 'react';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceApi';
import Pages from '../components/Pages';
import Search from '../components/Search';

const Shop = observer(() => {

    const {device} = useContext(Context)
    const [search, setSearch] = useState()

    useEffect(()=>{
        fetchTypes().then(data=>device.setTypes(data))
        fetchBrands().then(data=>device.setBrand(data))
        fetchDevices(null, null, 1, 9).then(data=>{
            device.setDevice(data.rows)
            device.setTotalCount(data.count)
        })
    },[])

    useEffect(()=>{
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 9).then(data=>{
            device.setDevice(data.rows)
            device.setTotalCount(data.count)})
    }, [device.page, device.selectedType, device.selectedBrand])

    return (
        <div style={{paddingTop:'70px', background:'black'}} className='d-flex'>
        <div style={{marginTop:'30px', background:'white', borderRadius:'40px 40px 0px 0px', width:'100%', flexDirection:'column'}} className='d-flex justify-content-center align-items-center pt-5 pb-5'>
            <div style={{ flexDirection:'row', columnGap:'50px', marginBottom:'50px'}} className=' d-flex justify-content-center align-items-center'>
                <TypeBar/>
                <BrandBar/>
                {/* <Search search={search} setSearch={setSearch} /> */}
            </div>
            <div className='d-flex justify-content-center align-items-center' style={{width: '90%', justifyContent:'center'}}>
                <DeviceList search={search} />
            </div>
            <Pages/>
        </div>
        
        </div>
    );
});

export default Shop;