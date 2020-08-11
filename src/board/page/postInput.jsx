import React, {useState} from 'react';
import {useRouteMatch} from 'react-router-dom'
import Breadcrumb from "../../common/breadcrumb";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const initUser = {
    name: '이형태',
    userId: 'tedd911'
}

const PostInput = () => {
    const match = useRouteMatch('/board/input/:category').params.category
    alert(match)
    const [user, setUser] = useState(initUser)
    const [post, setPost] = useState({})
    const [title, setTitle] = useState("")
    const [link, setLink] = useState("")
    const [content, setContent] =useState("")
    const [category, setCategory] = useState("")
    const onPostIn = (e) => {
        e.preventDefault()
        setCategory(match)
        setPost({
           title : title,
           content : content,
           link : link,
           userId : user.userId,
           category: category
        })
        alert(JSON.stringify(post))
    }
    return (
        <>
            <Breadcrumb title={'Board - Input'}/>
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
                                        <input type="text" className="form-control" id="title" onChange={(e) => {setTitle(e.target.value)}}
                                               placeholder="Enter this title" />
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="link">link</label>
                                        <input type="text" className="form-control" id="link" onChange={(e) => {setLink(e.target.value)}}
                                               placeholder="Link"/>
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
                                                <Col xs lg={2}>
                                                    <button className="btn btn-solid" onClick={onPostIn}>Post</button>
                                                    <button className="btn btn-solid">취소</button></Col>
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