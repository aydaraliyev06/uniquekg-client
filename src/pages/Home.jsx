import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const location = useNavigate('')

    return (
        <div style={{background:'black', height:'700px'}} className='d-flex justify-content-center align-items-center'>
            <div style={{background:'white', borderRadius:'20px', flexDirection:'column', rowGap:'20px', width:'300px', height:'300px'}} className='d-flex p-4 align-items-center justify-content-center'>
            <button onClick={e => location('/shop')} style={{width:'170px', height:'50px'}} type="button" class="btn btn-primary rounded-4">Машины</button>
            <button onClick={e => location('/shop')} style={{width:'170px', height:'50px'}} type="button" class="btn btn-primary rounded-4">Тех оборудование</button>
            <button onClick={e => location('/shop')} style={{width:'170px', height:'50px'}} type="button" class="btn btn-primary border-0 rounded-4">Строй компания</button>
            </div>
        </div>
    );
};

export default Home;