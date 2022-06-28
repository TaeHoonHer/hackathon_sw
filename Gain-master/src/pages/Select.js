import React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import gainImg from '../assets/img/GAIN.png';
import img1 from '../assets/img/character/28.png';
import img2 from '../assets/img/character/29.png';
import img3 from '../assets/img/character/263.png';
import img4 from '../assets/img/character/516.png';
import img5 from '../assets/img/character/556.png';
import img6 from '../assets/img/character/589.png';
import img7 from '../assets/img/character/957.png';
import img8 from '../assets/img/character/972.png';
import img9 from '../assets/img/character/5088.png';
import { useState,useRef } from 'react';
import styled from 'styled-components';



export default function Select(){
    const [imageSrc, setImageSrc] = useState('');
    const [selected1,setSelected1] = useState(false);
    const [selected2,setSelected2] = useState(false);
    const [selected3,setSelected3] = useState(false);
    const [selected4,setSelected4] = useState(false);
    const [selected5,setSelected5] = useState(false);
    const [selected6,setSelected6] = useState(false);
    const [selected7,setSelected7] = useState(false);
    const [selected8,setSelected8] = useState(false);
    const [selected9,setSelected9] = useState(false);
    const [isOnly,setIsOnly] = useState(true);

    return (
        <div className='Select'>
            <div className='sampleImg'>
                <img className='gainImg' src={gainImg}/>
                <div className='imgArray'>
                    <div className={selected1?'selected':'borderBox'} clicked={selected1} onClick={() => setSelected1(!selected1)}><img alt='1' className='rec' src={img1}/></div>
                    <div className={selected2?'selected':'borderBox'} clicked={selected2} onClick={() => setSelected2(!selected2)}><img alt='2' className='rec' src={img2}/></div>
                    <div className={selected3?'selected':'borderBox'} clicked={selected3} onClick={() => setSelected3(!selected3)}><img alt='3' className='rec' src={img3}/></div>
                    <div className={selected4?'selected':'borderBox'} clicked={selected4} onClick={() => setSelected4(!selected4)}><img alt='4' className='rec' src={img4}/></div>
                    <div className={selected5?'selected':'borderBox'} clicked={selected5} onClick={() => setSelected5(!selected5)}><img alt='5' className='rec' src={img5}/></div>
                    <div className={selected6?'selected':'borderBox'} clicked={selected6} onClick={() => setSelected6(!selected6)}><img alt='6' className='rec' src={img6}/></div>
                    <div className={selected7?'selected':'borderBox'} clicked={selected7} onClick={() => setSelected7(!selected7)}><img alt='7' className='rec' src={img7}/></div>
                    <div className={selected8?'selected':'borderBox'} clicked={selected8} onClick={() => setSelected8(!selected8)}><img alt='8' className='rec' src={img8}/></div>
                    <div className={selected9?'selected':'borderBox'} clicked={selected9} onClick={() => setSelected9(!selected9)}><img alt='9' className='rec' src={img9}/></div>
                </div>
                <div className='instruction'>
                    <p>원하는 필터를 선택해주세요.</p>
                    <p>사용자의 사진 + 캐릭터 필터</p>
                    <p id="bold">= 나만의 캐릭터 탄생</p>
                </div>
                <Link to="/result">
                    <Button className="submitButton" variant='contained'>결과보기</Button>
                </Link>
            </div>
        </div>
    );
}
