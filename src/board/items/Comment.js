import React from 'react';
import {useHistory} from 'react-router-dom'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from 'axios'
import {BACK_PATH} from "../../api/key";

const Comment = ({comments}) => {
    const history = useHistory()
    const user = JSON.parse(sessionStorage.getItem('user'))

    return (
        <>
            <div className="row section-b-space">
                        {comments.map( comment => (
                                        <Container key={comment.commentId}>
                                            <Row>
                                                <Col sm={10}>
                <div className="col-sm-12">
                    <ul className="comment-section">
                            <li >
                                <div className="media">
                                    <img src={comment.userProfile} alt="Generic placeholder image"/>
                                    <div className="media-body">
                                                    <h6>{comment.userId} <span>( {comment.regDate} )</span></h6>
                                                    <p> { comment.comment } </p>
                                    </div>
                                </div>
                            </li>
                    </ul>
                </div>
                                                </Col>
                                                <Col sm={2}>
                                                    <button className="fa fa-close" onClick={
                                                        (e)=>{
                                                            e.preventDefault()
                                                            if(user !== null) {
                                                                if(user.userId === comment.userId){
                                                                    axios.get(`http://${BACK_PATH}/comments/delete/${comment.commentId}`)
                                                                        .then((res) => {
                                                                            console.log(res.status)
                                                                            window.location.reload()
                                                                        })
                                                                        .catch((err)=> {
                                                                            console.log(err.status)
                                                                            alert('삭제 실패')
                                                                        })
                                                                } else {
                                                                    alert('본인 댓글이 아닙니다.')
                                                                }
                                                            } else {
                                                                alert('로그인이 필요합니다.')
                                                                history.push('/pages/login')
                                                            }
                                                        }
                                                    }/>
                                                </Col>
                                            </Row>
                                        </Container>
                        ))}
            </div>
        </>
    );
};

export default Comment;