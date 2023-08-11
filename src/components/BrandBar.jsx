import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Context } from '../index';
import './TypeBar.css';

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    const [carBrand, setCarBrand] = useState(false)

    return (
        <div className='dropdown' style={{width:'157px'}}>
            <button type="button" class="btn btn-secondary" onClick={()=>setCarBrand(!carBrand)}>Бренды</button>
            {device.brands.map(brand =>
            <div id={carBrand ? 'on' : 'off'}>
                <div 
                    key={brand.id}
                    
                    onClick={()=>device.setSelectedBrand(brand)}
                    style={{width:'157px', cursor:'pointer'}}
                    className={brand.id === device.selectedBrand.id ? 
                        'd-flex justify-content-center text-decoration-none p-2  border fs-7 bg-primary text-light' 
                        : 
                        'd-flex justify-content-center text-decoration-none p-2 border fs-7 text-dark'}
                >
                    {brand.name}
                </div>
            </div> 
            )}
        </div>
    );
});

export default BrandBar;