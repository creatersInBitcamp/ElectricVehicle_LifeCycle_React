import React, {useEffect, useState} from 'react';
import {useRouteMatch} from 'react-router-dom'
import {Breadcrumb} from "../../common";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import {AWS_PATH} from '../../api/key'

const sessionUser = JSON.parse(sessionStorage.getItem('user'))

const PostUadate = ({history}) => {
    const postId = useRouteMatch('/board/update/:postId').params.postId
    const [user, setUser] = useState(sessionUser)
    const [title, setTitle] = useState("test")
    const [link, setLink] = useState("test")
    const [img, setImg] = useState("test")
    const [content, setContent] = useState("test")
    const [category, setCategory] = useState("")
    useEffect(() => {
        axios.get(`${AWS_PATH}/posts/getOne/${postId}`)
            .then((res)=> {
                console.log(res.data)
                setLink(res.data.link)
                setTitle(res.data.title)
                setImg(res.data.img)
                setContent(res.data.content)
                setCategory(res.data.category)

            })
            .catch((err)=>{
                console.log(err.status)
            })
        // setPostCategory(category)
    },[])
    const onUpdatePost = (e) => {
        e.preventDefault()
        const newPost = {
            postId: postId,
            userId: user.userId,
            link : link,
            title : title,
            date : new Date().toLocaleString(),
            img : img,
            content : content,
            category: category,
            userSeq : user.userSeq,
        }
        console.log(newPost)
        axios.post(`${AWS_PATH}/posts/update`, newPost)
            .then((res) => {
                console.log(res.statusText)
                history.push(`/board/main/${category}`)
            })
            .catch((err) => {
                console.log(err.status)
            })
    }
    return (
        <>
            <Breadcrumb title={`Board - Update ${category} ${postId}`}/>
            <section className="blog-detail-page section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 blog-detail">
                            <ul className="post-social">
                                <li>{new Date().toLocaleDateString()}</li>
                                <li>Posted By : {user.name}</li>
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
                                        <input type="text" className="form-control" id="title" value={title} onChange={(e) => {setTitle(e.target.value)}}
                                               placeholder="Enter this title" />
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="link">link</label>
                                        <input type="text" className="form-control" id="link" value={link} onChange={(e) => {setLink(e.target.value)}}
                                               placeholder="Link"/>
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="image">image</label>
                                        <input type="text" className="form-control" id="image" value={img} onChange={(e) => {setImg(e.target.value)}}
                                               placeholder="Image"/>
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="content">내용</label>
                                        <textarea className="form-control" placeholder="Write Your Content" id="content" value={content} onChange={(e) => {setContent(e.target.value)}}
                                                  rows="24"/>
                                    </div>
                                    <div className="col-md-12">
                                        <Container>
                                            <Row>
                                                <Col/>
                                                <Col xs lg={2}>
                                                    <button className="btn btn-solid" onClick={onUpdatePost}>Update</button>
                                                    <button className="btn btn-solid" onClick={(e)=>{history.push(`/board/main/${category}`)}}>취소</button></Col>
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

export default PostUadate;