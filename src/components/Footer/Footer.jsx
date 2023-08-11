import React from 'react';
import insta from './img/instagram (1).png'
import whatsApp from './img/whatsapp (1).png'
import Telegram from './img/telegram.png'
import './Footer.css';

const Footer = () => {
    return (
        <div style={{borderTop:'1px solid', marginTop:'0px'}} className='d-flex bg-white text-primary p-5 justify-content-between'>
            <div className='d-flex row gy-1'>
                <p>Контакты:</p>
                <p>+996(555)-000-222</p>
                <p>+996(555)-000-222</p>
            </div>
            <div style={{display:'flex', flexDirection:'column', rowGap:'10px'}}>
            <p>Связваться с нами:</p>
            <div style={{display:'flex',columnGap:'10px',}}>
                <a href='#'>
                    <img style={{width:'50px'}} src={insta} alt="" />
                </a>
                <a>
                    <img style={{width:'50px'}} src={whatsApp} alt="" />
                </a>
                <a>
                    <img style={{width:'50px'}} src={Telegram} alt="" />
                </a>
            </div>
            </div>
        </div>
    );
};

export default Footer;