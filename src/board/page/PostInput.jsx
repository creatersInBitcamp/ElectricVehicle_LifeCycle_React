import React, {useEffect, useState} from 'react';
import {useRouteMatch} from 'react-router-dom'
import {Breadcrumb} from "../../common";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {RefreshInfo} from '../items/index'
import axios from "axios";
import {BACK_PATH} from "../../api/key";
import {Image} from "../../admin/item";
const sessionUser = JSON.parse(sessionStorage.getItem('user'))

const PostInput = ({history}) => {
    const match = useRouteMatch('/board/input/:category').params.category
    const [user, setUser] = useState(sessionUser)
    const [title, setTitle] = useState("")
    const [link, setLink] = useState("")
    const [img, setImg] = useState("https://www.skt-phone.co.kr/resource/images/visual-notice.png")
    const [content, setContent] =useState("")
    const [category, setCategory] = useState("")
    useEffect(() => {
        setCategory(match)
        setUser(sessionUser)
        console.log(user)
    },[match])

    const newPost = {
        userId: user.userId,
        link : link,
        title : title,
        date : new Date().toLocaleString(),
        img : img,
        content : content,
        category: category,
        userSeq : user.userSeq,
    }

    const onPostIn = (e) => {
        e.preventDefault()
        console.log(newPost)
        axios.post(`http://${BACK_PATH}/posts/insert`, newPost)
            .then((res) => {
                console.log(res.statusText)
                RefreshInfo()
                switch (match){
                    case 'faq': history.push('/pages/faq'); break;
                    default: history.push(`/board/main/${match}`)
                }
            })
            .catch((err) => {
                console.log(err.status)
            })
    }

    const onNotice = (e) => {
        e.preventDefault()
        axios.post(`http://${BACK_PATH}/posts/insert`, newPost)
            .then((res) => {
                console.log(res.statusText)
                history.push(`/admin/notice`)
            })
            .catch((err) => {
                console.log(err.status)
            })
    }
    return (
        <>
            <Breadcrumb title={`Board - Input ${match}`}/>
            <section className="blog-detail-page section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 blog-detail">
                            <ul className="post-social">
                                <li>{new Date().toLocaleDateString()}</li>
                                <li>Posted By : {user.userId}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row blog-contact">
                        <div className="col-sm-12">
                            <h2>Post contents</h2>
                            <form className="theme-form">
                                <div className="form-row">
                                    <div className="col-md-12">
                                        <label htmlFor="title">제목</label>
                                        <input type="text" className="form-control" id="title" onChange={(e) => {setTitle(e.target.value)}}
                                               placeholder="Enter this title" />
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="link">link</label>
                                        <input type="text" className="form-control" id="link" onChange={(e) => {setLink(e.target.value)}}
                                               placeholder="Link"/>
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="link">image</label>
                                        <input type="text" className="form-control" id="image" value={img}/>
                                        <div className="col-md-8">
                                            <Image path={"postImgUpload"} setImgLink={(imgLink)=>{setImg(imgLink)}}/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="content">내용</label>
                                        <textarea className="form-control" placeholder="Write Your Content" id="content" onChange={(e) => {setContent(e.target.value)}}
                                                  rows="24"/>
                                    </div>
                                    <div className="col-md-12">
                                        <Container>
                                            <Row>
                                                <Col/>
                                                    {(category === 'notice')?
                                                        <Col xs lg={2}>
                                                            <button className="btn btn-solid" onClick={onNotice}>공지사항</button>
                                                            <button className="btn btn-solid" onClick={(e)=>{history.push(`/admin/notice`)}}>취소</button>
                                                        </Col>
                                                        :
                                                        (category === 'faq')?
                                                        <Col xs lg={2}>
                                                            <button className="btn btn-solid" onClick={onPostIn}>Post</button>
                                                            <button className="btn btn-solid" onClick={(e)=>{history.push(`/pages/faq`)}}>취소</button>
                                                        </Col>
                                                        :
                                                        <Col xs lg={2}>
                                                            <button className="btn btn-solid" onClick={onPostIn}>Post</button>
                                                            <button className="btn btn-solid" onClick={(e)=>{history.push(`/board/main/${category}`)}}>취소</button>
                                                        </Col>
                                                    }
                                            </Row>
                                        </Container>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PostInput;