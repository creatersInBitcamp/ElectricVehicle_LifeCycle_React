import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from 'axios'

const Comment = ({comments}) => {

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
                                    <img src={`https://www.carparison.com.au/themes/front/images/user-profile.png`}
                                         alt="Generic placeholder image"/>
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
                                                    <button onClick={(e)=>{
                                                        e.preventDefault()
                                                        axios.get(`localhost:8080/comments/delete/${comment.commentId}`)
                                                            .then((res) => {
                                                                console.log(res.status)
                                                            })
                                                            .catch((err)=> {
                                                                console.log(err.status)
                                                            })
                                                    }}> 삭제 </button>
                                                </Col>
                                            </Row>
                                        </Container>
                        ))}
            </div>
        </>
    );
};

export default Comment;