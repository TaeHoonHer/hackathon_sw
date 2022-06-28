import React, { useState, useLayoutEffect } from "react";
import axios from "axios";


export default function Test(){
    const [applicantData, setapplicantData] = useState();
    const [loading, setLoading] = useState(false);
    const [isUpload, setIsupload] = useState(false);

    useLayoutEffect(() => {
        readApplicantData();
    }, []);

    const readApplicantData = async (programID, userID) => {
        const response = await axios.get("http://localhost:8000/api/gains/");
        console.log(response.data[0]);
        setapplicantData(response.data[0]);
        setLoading(true);
    };

    const uploadModule = async (e) => {
        e.preventDefault();
        // const number = e.target[1].value;
        const number = 1;

        //event로 file 객체 얻기
        const upload_file = e.target[0].files[0];

        //폼 데이터 생성
        const formData = new FormData();
        formData.append("number",number);
        formData.append("files",upload_file);
        formData.append("enctype","multipart/form-data");

        // 파일을 업로드 시킬 Server 주소
        const URL = "http://127.0.0.1:8000/uploads/labs"

        axios({
            method:"post",
            url: URL,
            data: formData,
            headers:{
                "Content-Type": "multipart/form-data",
            }
        }).then(function (response){
            console.log("사진업로드 완료")
            setIsupload(true);
            // const imgGet = axios.get("http://localhost:8000/downloadImg");
        })
    }

    return (
        <div className='Test'>
            {loading?applicantData.description:""}
            <h2>이미지 테스트 페이지 입니다.</h2>
            <form onSubmit={uploadModule}>
               
                files<input type = 'file' name="files"/>
                <input type="submit" value="SUBMIT"/>
            </form>
        </div>
    );
}