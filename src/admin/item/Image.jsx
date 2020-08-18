import React, {useState} from 'react';
import http from "./http";

const imageReducer = ( state={}, action ) => {
    switch (action.type) {
        default: return state
    }
}

export const Image = () => {
    const[content, setContent] = useState(undefined)
    const[img, setImg] = useState(undefined)
    const[message, setMessage] = useState('')

    const addFile = e => {
        setContent(e.target.files[0]);
    };
    const uploadService = file => {
        let formData = new FormData();
        formData.append("file", file)
        return http.post("/imgUpload", formData, {})
    }

    const upload = () => {
        let currentFile = content
        setImg(currentFile)

        uploadService(currentFile, e =>{})
            .then((res)=>{
                setMessage(res.data)
            })
            .catch(()=>{
                setMessage("파일업로드 실패")
                setImg(undefined)
            })
        setContent(undefined)
    }


    return (
        <>
                {img ? (
                    <>
                        <img src={img} alt="" />
                        <h3>{img.fileName}</h3>
                    </>
                ) : (
                    ""
                )}
                <input type="file" onChange={addFile} />
                <button type="button" onClick={upload}>Upload</button>

        </>

    )
}

export default imageReducer
