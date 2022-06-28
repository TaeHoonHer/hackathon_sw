import React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import gainImg from '../assets/img/GAIN 2.png';
import logoImg from '../assets/img/logoImg 1.png';
import instagramLogo from '../assets/img/instagram.png';
import twitterLogo from '../assets/img/twitter.png';
import facebookLogo from '../assets/img/facebook.png';


export default function Main_(){
    return (
        <div className='Main_'>
            <div className='gain'>
                <img alt='gain' className='gainImg' src={gainImg}/>
            </div>
            <div className='alineWelcome'>
                <div className='welcome'>
                    <h2>WELCOME</h2>
                    <div className='logo'>
                        <img alt='logo' className='logoImg' src={logoImg}/>
                    </div>
                    <div className='pText'>
                        <p>당신의 특별한 캐릭터</p>
                        <p>지금 바로 만들어보세요!</p>
                    </div>
                    <Link to="/create">
                        <Button variant='contained'>START</Button>
                    </Link>
                    <div className='socialMediaLogo'>
                        <a href='https://www.facebook.com/' target="_blank">
                            <img alt='facebookLogo' src={facebookLogo}/>
                        </a>
                        <a href='https://twitter.com/' target="_blank">
                            <img alt='twitterLogo' src={twitterLogo}/>
                        </a>
                        <a href='https://www.instagram.com/' target="_blank">
                            <img alt='instagramLogo' src={instagramLogo}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}