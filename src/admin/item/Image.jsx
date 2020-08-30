import React, {useState} from 'react';
import http from "./http";
import FittedImage from "react-fitted-image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const imageReducer = ( state={}, action ) => {
    switch (action.type) {
        default: return state
    }
}

export const Image = ({path, setImgLink}) => {
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
        return http.post(`/${path}`, formData, {})
    }

    const upload = () => {
        if(url === ''){
            alert("파일을 선택해주세요")
        }
        let currentFile = content
        setImg(currentFile)

        uploadService(currentFile)
            .then((res)=>{
                alert(`파일이 업로드되었습니다. imgLink : ${res.data}`)
                setImgLink(res.data)
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
                        <div className="input-air-primary">
                            <b>미리보기</b>
                            <FittedImage fit="contain" src={url} alt="#" />
                        </div>
                    </>
                ) : (
                    ""
                )}
                <Container className="input-air-success">
                    <Row>
                        <Col/>
                        <Col>
                            <input type="file" onChange={addFile} />
                        </Col>
                        <Col/>
                    </Row>
                    <Row>
                        <Col/>
                        <Col>
                            <button className="btn btn-outline-primary" type="button" onClick={upload}>업로드</button>
                        </Col>
                        <Col>
                            <button className="btn btn-outline-danger" onClick={cancel}>취소</button>
                        </Col>
                        <Col/>
                    </Row>
                </Container>
        </>

    )
}

export default imageReducer
