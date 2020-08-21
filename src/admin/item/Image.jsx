import React, {useState} from 'react';
import http from "./http";
import FittedImage from "react-fitted-image";

const imageReducer = ( state={}, action ) => {
    switch (action.type) {
        default: return state
    }
}

export const Image = () => {
    const[content, setContent] = useState(undefined)
    const[img, setImg] = useState(undefined)
    const[url, setUrl] = useState('')
    const[formData] = useState(new FormData())

    const addFile = (e) => {

        setContent(e.target.files[0]);
        setUrl(URL.createObjectURL(e.target.files[0]))
    };
    const uploadService = file => {
        formData.append("file", file)
        return http.post("/imgUpload", formData, {})
    }

    const upload = () => {
        if(url === ''){
            alert("파일을 선택해주세요")
        }
        let currentFile = content
        setImg(currentFile)

        uploadService(currentFile)
            .then((res)=>{
                window.location.reload()
                alert('파일이 업로드되었습니다.')
            })
            .catch(()=>{
                setImg(undefined)
                setContent(undefined)
                setUrl('')
                window.location.reload()
                alert('파일업로드 실패')
            })
        setContent(undefined)
        setImg(undefined)
        setUrl('')
    }

    const cancel = () => {
        setImg(undefined)
        setContent(undefined)
        setUrl('')
        window.location.reload()
    }

    return (


        <>
                {url ? (
                    <>
                        <h4>미리보기</h4>
                        <FittedImage fit="contain" src={url} alt="#" />
                    </>
                ) : (
                    ""
                )}
                <input type="file" onChange={addFile} />
                <button type="button" onClick={upload}>업로드</button>
                <button onClick={cancel}>취소</button>

        </>

    )
}

export default imageReducer
