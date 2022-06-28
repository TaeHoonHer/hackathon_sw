import React from 'react';
import Button from '@mui/material/Button';
import gainImg from '../assets/img/GAIN.png';
import logoImg from '../assets/img/logoImg 1.png';
import { Link } from "react-router-dom";

export default function Main(){
    return (
        <div className='Main'>
            <div>
                <img alt='gain' className='gainImg' src={gainImg}/>
            </div>

            <div className='pText'>
                <p>당신의 특별한 캐릭터</p>
                <p>지금 바로 만들어보세요!</p>
            </div>
            
            <div className='logo'>
                <img alt='logo' className='logoImg' src={logoImg}/>
            </div>
  
           
            <Link to="/upload">
                <Button variant='contained'>START</Button>
            </Link>
        </div>
    );
}