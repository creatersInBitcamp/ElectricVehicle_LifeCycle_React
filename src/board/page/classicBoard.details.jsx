import React, {useEffect, useState} from 'react';
import { useRouteMatch } from 'react-router-dom'
import {Breadcrumb} from "../../common";
import {Comment} from "../items";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from 'axios'
const initUser = {
    userId: 'tedd911',
    userSeq: '301',
    userName: '이형태'
}
const ClassicBoardDetails = ({history}) => {
        const [post, setPost] = useState({})
        const [commentText, setCommentText] = useState("")
        const match = useRouteMatch('/board/details/:postId').params.postId
        const reFresh = () => {
            setPost(
                axios.get(`http://localhost:8080/posts/getone/${match}`)
                    .then((res) => {
                        console.log(res.data)
                        setPost(res.data)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            )
        }
        useEffect(() => {
            reFresh()
        }, [])
        const commentPush = () => {
            const newComment = {
                regDate: new Date().toLocaleString(),
                comment: commentText,
                user: initUser,
                post: {postId: match}
            }
            console.log(newComment)
            axios.post(`http://localhost:8080/comments/insert`, newComment)
                .then((res)=>{
                    console.log(res.status)
                    reFresh()
                })
                .catch((err)=> {
                    console.log(err.status)
                })
        }

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
                                    <h3>{post.title}</h3>
                                    <ul className="post-social">
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <li>{post.date}</li>
                                                    <li>Posted By :{post.userName}</li>
                                                    <li><i className="fa fa-heart"/> {post.recommendation} like </li>
                                                    <li><i className="fa fa-comments"/> 0 Comment</li>
                                                </Col>
                                                <Col xs lg={2}>
                                                    <button className="btn btn-solid" onClick={(e) => {
                                                        e.preventDefault()

                                                    }}>수정</button><a>  </a>
                                                    <button className="btn btn-solid" onClick={(e) => {
                                                        e.preventDefault()
                                                        axios.get(`http://localhost:8080/posts/delete/${post.postId}`)
                                                        .then((res) => {
                                                            history.push(`/board/main/${match}`)
                                                        })
                                                        .catch((err) => {
                                                            console.log(err.status)
                                                        }) }}>삭제</button>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </ul>
                                    <div className="row">
                                        <iframe src={post.link} width={1920} height={2000}/>
                                    </div>
                                </div>
                                <Container>
                                    <Row>
                                        <Col>
                                            <button className="btn btn-solid">목록</button>
                                        </Col>
                                        <Col xs md={2}>
                                            <button className="btn btn-solid">수정</button>
                                            <a>  </a>
                                            <button className="btn btn-solid">삭제</button>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                            { (post.comments) ?
                                <Comment comments={post.comments}/>
                                :
                                <div className="row section-b-space">
                                    <div className="col-sm-12">
                                        <ul className="comment-section">
                                                <li>
                                                    <div className="media">
                                                        <img src={`https://www.carparison.com.au/themes/front/images/user-profile.png`}
                                                             alt="Generic placeholder image"/>
                                                        <div className="media-body">
                                                            <h6> 코멘트가 없습니다. </h6>
                                                        </div>
                                                    </div>
                                                </li>
                                        </ul>
                                    </div>
                                </div>
                            }
                            <div className="row blog-contact">
                                <div className="col-sm-12">
                                    <h2>Leave Your Comment</h2>
                                    <form className="theme-form">
                                        <div className="form-row">
                                            <div className="col-md-12">
                                                <label htmlFor="name">User Name : {initUser.userId}</label>
                                            </div>
                                            <div className="col-md-12">
                                                <label htmlFor="exampleFormControlTextarea1">Comment</label>
                                                <textarea className="form-control" placeholder="Write Your Comment"
                                                          id="exampleFormControlTextarea1" rows="6" onChange={(e) => {setCommentText(e.target.value)}}/>
                                            </div>
                                            <div className="col-md-12">
                                                <button className="btn btn-solid" onClick={(e) => {
                                                    e.preventDefault()
                                                    commentPush()
                                                }}>Post Comment</button>
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