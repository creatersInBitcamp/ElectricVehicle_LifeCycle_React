import React, {useEffect, useState} from 'react';
import { useRouteMatch } from 'react-router-dom'
import Breadcrumb from "../../common/breadcrumb";
import Comment from "../items/comment";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from 'axios'

const ClassicBoardDetails = () => {
        const [post, setPost] = useState({})
        const match = useRouteMatch('/board/details/:postId')
        useEffect(() => {
            setPost(
                // axios.get(`http://localhost:8080/posts/getone/${match}`)
                //     .then((res) => {
                //         setPost(res.data)
                //     })
                //     .catch((error) => {
                //         console.log(error)
                //     })
            )
        })

        return (
            <div>
                {/*Blog Details section*/}
                    <>
                    <Breadcrumb title={'Board - Details'}/>
                    <section className="blog-detail-page section-b-space">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 blog-detail">
                                    {/*<img src={} className="img-fluid" alt=""/>*/}
                                    <h3>title</h3>
                                    <ul className="post-social">
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <li>작성시간</li>
                                                    <li>Posted By :작성자</li>
                                                    <li><i className="fa fa-heart"/>  Hits</li>
                                                    <li><i className="fa fa-comments"/> Comment</li>
                                                </Col>
                                                <Col xs lg={2}>
                                                    <button className="btn btn-solid" onClick={() => {alert('post 수정버튼')}}>수정</button>
                                                    <button className="btn btn-solid" onClick={() => {alert('post 삭제버튼')}}>삭제</button>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </ul>
                                    <div className="row">
                                        <iframe src={"https://www.evpost.co.kr/wp/쏘울soul-ev-시승기-감성과-테크놀로지의-조화/"} width={1920} height={2000} sandbox></iframe>
                                        {/*<iframe src={post.url} width={1920} height={2000} sandbox></iframe>*/}
                                    </div>
                                </div>
                            </div>
                            <div className="row section-b-space">
                                <div className="col-sm-12">
                                    <ul className="comment-section">
                                        <Comment/>
                                    </ul>
                                </div>
                            </div>
                            <div className="row blog-contact">
                                <div className="col-sm-12">
                                    <h2>Leave Your Comment</h2>
                                    <form className="theme-form">
                                        <div className="form-row">
                                            <div className="col-md-12">
                                                <label htmlFor="name">Name</label>
                                                <input type="text" className="form-control" id="name"
                                                       placeholder="Enter Your name" required=""/>
                                            </div>
                                            <div className="col-md-12">
                                                <label htmlFor="email">Email</label>
                                                <input type="text" className="form-control" id="email"
                                                       placeholder="Email"
                                                       required=""/>
                                            </div>
                                            <div className="col-md-12">
                                                <label htmlFor="exampleFormControlTextarea1">Comment</label>
                                                <textarea className="form-control" placeholder="Write Your Comment"
                                                          id="exampleFormControlTextarea1" rows="6"/>
                                            </div>
                                            <div className="col-md-12">
                                                <button className="btn btn-solid" type="submit">Post Comment</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                    </>
            </div>
        )
}

export default ClassicBoardDetails