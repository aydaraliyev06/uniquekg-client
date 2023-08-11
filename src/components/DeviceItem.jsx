import React, { useContext } from 'react';
import { useNavigate, useLocation} from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({device}) => {
    const location = useNavigate()
    const hostApi = 'http://localhost:8000/'
    const whatsApp = 'https://api.whatsapp.com/send?phone=996707818717&text=%D0%AF%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E'

    return (
        <div style={{display:'flex', margin:'0px 20px 20px 20px', height:'430px'}} className=''>
            <div className="d-flex p-3 row border rounded-3" onClick={()=>location(DEVICE_ROUTE + '/' + device.id)} style={{width: '16rem',cursor:'pointer'}}>
                <img style={{width:'95%', height:'46%', backgroundSize:'cover'}} src={hostApi + device.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title mt-2">{device.name}</h5>
                    <p className='card-text mt-2'>{device.info}</p>
                    <p className="card-text mt-2 text-danger fs-5">{device.price}$</p>
                    <a href={whatsApp} class="btn btn-outline-success">Заказать</a>
                </div>
            </div>
        </div>
    );
};

export default DeviceItem;