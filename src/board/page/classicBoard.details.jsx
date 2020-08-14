import React, {useEffect, useState} from 'react';
import {Link, useRouteMatch} from 'react-router-dom'
import {Breadcrumb} from "../../common";
import {Comment} from "../items";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from 'axios'
import {size} from "underscore";
const sessionUser = JSON.parse(sessionStorage.getItem('user'))

const ClassicBoardDetails = ({history}) => {
        const [user, setUser] = useState({userId: 'nologin'})
        const [post, setPost] = useState({})
        const [commentText, setCommentText] = useState("")
        const match = useRouteMatch('/board/details/:postId').params.postId
        const reFresh = () => {
            console.log(sessionUser)
            setUser(sessionUser)
            setPost(
                axios.get(`http://localhost:8080/posts/getOne/${match}`)
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
        }, [match])
        const commentPush = () => {
            const newComment = {
                userId: user.userId,
                regDate: new Date().toLocaleString(),
                comment: commentText,
                user: user,
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
                                                    <li>Posted By :{post.userId}</li>
                                                    <li><i className="fa fa-heart"/> {post.recommendation} like </li>
                                                    <li><i className="fa fa-comments"/> {size(post.comments)} Comment</li>
                                                </Col>
                                                <Col xs lg={2}>
                                                    {(user !== null)?
                                                        <>
                                                        <Link to={`${process.env.PUBLIC_URL}/board/update/${post.postId}`}><button className="btn btn-solid">수정</button></Link>
                                                        <button className="btn btn-solid" onClick={(e) => {
                                                        e.preventDefault()
                                                        axios.post(`http://localhost:8080/posts/delete/${post.postId}`)
                                                            .then((res) => {
                                                                history.push(`/board/main/${match}`)
                                                            })
                                                            .catch((err) => {
                                                                console.log(err.status)
                                                            }) }}>삭제</button>
                                                        </>
                                                        :
                                                        ""}
                                                </Col>
                                            </Row>
                                        </Container>
                                    </ul>
                                    <div className="row">
                                        <iframe src={post.link} width={1920} height={1500}/>
                                    </div>
                                </div>
                                <Container>
                                    <Row>
                                        <Col>
                                            <button className="btn btn-solid" onClick={(e) => {
                                                e.preventDefault()
                                                history.push(`/board/main/${post.category}`)
                                            }}>목록</button>
                                        </Col>
                                        <Col xs md={2}>
                                            {(user !== null)?
                                                <>
                                                    <Link to={`${process.env.PUBLIC_URL}/board/update/${post.postId}`}><button className="btn btn-solid">수정</button></Link>
                                                    <button className="btn btn-solid" onClick={(e) => {
                                                        e.preventDefault()
                                                        axios.get(`http://localhost:8080/posts/delete/${post.postId}`)
                                                            .then((res) => {
                                                                history.push(`/board/main/${match}`)
                                                            })
                                                            .catch((err) => {
                                                                console.log(err.status)
                                                            }) }}>삭제</button>
                                                </>
                                                :
                                                ""}
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                            { (post.comments ) ?
                                <Comment postId={post.postId} comments={post.comments}/>
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
                            {(user !== null) ?
                                <div className="row blog-contact">
                                    <div className="col-sm-12">
                                        <form className="theme-form">
                                            <div className="form-row">
                                                <div className="col-md-12">
                                                    <label htmlFor="name">User ID : {user.userId}</label>
                                                </div>
                                                <div className="col-md-12">
                                                    <label htmlFor="exampleFormControlTextarea1">Comment</label>
                                                    <textarea className="form-control" placeholder="Write Your Comment"
                                                              id="exampleFormControlTextarea1" rows="6"
                                                              onChange={(e) => {
                                                                  setCommentText(e.target.value)
                                                              }}/>
                                                </div>
                                                <div className="col-md-12">
                                                    <button className="btn btn-solid" onClick={
                                                        (e) => {
                                                            commentPush()
                                                        }}>Post Comment
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                : ""
                            }
                        </div>
                    </section>
                    </>
            </div>
        )
}

export default ClassicBoardDetails