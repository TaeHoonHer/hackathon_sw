import React,{useRef} from 'react';
import { Link } from "react-router-dom";
import { Button, Slider,Typography,Modal,Box} from "@mui/material";
import gainImg from '../assets/img/GAIN.png';
import logoImg from '../assets/img/logoImg 3.png';
import kakaoImg from '../assets/img/kakao.png';
import linkImg from '../assets/img/link.png';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 100,
        label: '100',
    },
];
function valuetext(value){
    return `${value}%`;
}

export default function Result (){
    const filterLevel = useRef();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };  

    return (
        <div className="Result">
            <div className='alineDiv'>
                <img className='gainImg' src={gainImg}/>
                <div className='logo'>
                    <img src={logoImg}/>
                </div>
                <Typography style={{fontSize:'18px', marginTop:'5px',color:'#FDF2EE'}}>
                    비율 설정
                </Typography>
                <div className='sliderWrap'>
                    <p>내 모습</p>
                    <Slider
                        className="slider"
                        ref={filterLevel}
                        aria-label="Custom marks"
                        defaultValue={0}
                        getAriaValueText={valuetext}
                        step={10}
                        valueLabelDisplay="auto"
                        marks={marks}
                        onChangeCommitted={()=>{console.log(filterLevel.value)}}
                    />
                    <p>캐릭터</p>
                </div>
                
                <Link to="../assets/img/link.png" target="_blank" download>
                    <Button variant='contained' onClick={handleOpen}>결과 저장하기</Button>
                </Link>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >
                    <Box sx={{ ...style, width: 400 }}>
                    <h2 id="parent-modal-title">성공!</h2>
                    <p id="parent-modal-description">
                        정상적으로 파일이 저장되었습니다.
                    </p>
                    </Box>
                </Modal>
                <Link to="/select">
                    <Button variant='contained'>다른 필터 적용해보기</Button>
                </Link>
                <Link to="/upload">
                    <Button variant='contained'>다른 사진으로 만들기</Button>
                </Link>
                <div className='buttonWrap'>
                    <div className='button'>
                        <Link to="https://www.kakaocorp.com/" target="_blank"><img src={kakaoImg}/></Link>
                        <p>카카오톡 공유</p>
                    </div>
                    <div className='button'>
                        <Link to="" target="_blank"><img src={linkImg} onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}/></Link>
                        <p>링크 복사</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
