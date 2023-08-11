import React from 'react';
import img1 from '../components/Footer/img/instagram (1).png'
import img2 from '../components/Footer/img/whatsapp (1).png'
import img3 from '../components/Footer/img/telephone.png'
import img4 from '../components/Footer/img/telegram.png'

const Contacts = () => {
    return (
        <div style={{height:'600px', background:'black'}} className='d-flex justify-content-center align-items-center'>
            <div style={{width:'300px', flexDirection:'column', rowGap:'10px'}} className='d-flex bg-white p-3 row gx-2 gy-2 rounded-4 text-primary'>
                <h1 style={{textAlign:'center'}}>Контакты</h1>
                <a className='d-flex align-items-center' style={{flexDirection:'row', columnGap:'10px', width:'200px'}} href='#'>
                    <img width={40} src={img3} alt="" />
                    <p>+996(555)-000-222</p>
                </a>
                <a className='d-flex align-items-center' style={{flexDirection:'row', columnGap:'10px', width:'200px'}} href='#'>
                    <img width={40} src={img2} alt="" />
                    <p>+996(555)-000-222</p>
                </a>
                <a className='d-flex align-items-center' style={{flexDirection:'row', columnGap:'10px', width:'200px'}} href='#'>
                    <img width={40} src={img1} alt="" />
                    <p>instagram</p>
                </a>
                <a className='d-flex align-items-center' style={{flexDirection:'row', columnGap:'10px', width:'200px'}} href='#'>
                    <img width={40} src={img4} alt="" />
                    <p>telegram</p>
                </a>
            </div>
        </div>
    );
};

export default Contacts;