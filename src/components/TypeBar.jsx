import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Context } from '../index';
import './TypeBar.css';

const TypeBar = observer(() => {
    const [carTypes, setCarTypes] = useState(false)
    const {device} = useContext(Context)

    return (
            <div className="dropdown ">
                <button type="button" class="btn btn-secondary" onClick={()=>setCarTypes(!carTypes)}>Типы</button>
                {device.types.map(type => (<div id={carTypes ? 'on' : 'off'} className='' key={type.id}>
                    
                    <div type='button' style={{width:'157px', position:"relative"}} onClick={()=> {device.setSelectedType(type);}} className={type.id === device.selectedType.id ? 'd-flex justify-content-center text-decoration-none p-2 border fs-7 bg-primary text-light' : 'd-flex justify-content-center text-decoration-none p-2 border fs-7 text-dark'}>
                        {type.name}
                    </div>
                </div>)
            ) } 
            </div>
    );
});

export default TypeBar;