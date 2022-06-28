import React from 'react';
import Button from '@mui/material/Button';
import gainImg from '../assets/img/GAIN.png';
import logoImg from '../assets/img/logoImg 1.png';
import { Link } from "react-router-dom";
import avatar from '../assets/img/avatar2.png';
import { useState } from 'react';

export default function Upload(){
    const [imageSrc, setImageSrc] = useState('');
    const [selected,setSelected] = useState();

    const encodeFileToBase64 = (fileBlob) => {
          
        const reader = new FileReader();
    
        reader.readAsDataURL(fileBlob);
    
        return new Promise((resolve) => {
          reader.onload = () => {
            setImageSrc(reader.result);
            resolve();
          };
        });

      };
    
    const clickFilter = (e) =>{
        console.log(e.alt);
        setSelected(e.alt);

    }

    return (
        <div className='Upload'>
            <div>
                <img alt='gain' className='gainImg' src={gainImg}/>
            </div>
            <div className='alineUploadImg'>
                <div className='uploadImg'>
                    <div className='imgFrame'>
                        {imageSrc == ''? <img id="defaultImg" src={avatar} width="60px"/> :<img id='previewImg' src={imageSrc} />}
                    </div>
                    <div className='pText'>
                        <p>정면 얼굴 사진을 업로드 해주세요 :)</p> 
                    </div>
                    <div className='uploadBtns'>
                        <Button id='cameraBtn' variant='contained'>사진찍기</Button>
                        <label className="input-file-button" for="input-file">
                            이미지 가져오기
                        </label>
                        <input type="file" id="input-file" style={{display:"none"}} accept=".png, .jpg, .jpeg" required onChange={(e) => {
                            encodeFileToBase64(e.target.files[0]);
                        }}/>
                    </div> 
                    <Link to="/select">
                        <Button id="nextBtn" variant='contained'>다음</Button>
                    </Link>
    
                    
                </div>
            </div>
  
        
        </div>
    );
}