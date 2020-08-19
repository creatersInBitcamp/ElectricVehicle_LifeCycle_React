import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from 'axios'
const sessionUser = JSON.parse(sessionStorage.getItem('user'))
const Comment = ({comments, postId}) => {
    const [user, setUser] = useState(sessionUser)
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
                                                    <button className="fa fa-close" onClick={(e)=>{
                                                        e.preventDefault()
                                                        const mail = {
                                                            commentId: comment.commentId,
                                                            userId: comment.userId,
                                                            regDate: comment.regDate,
                                                            comment: comment.comment,
                                                            user: user,
                                                            post: {postId: postId}
                                                        }
                                                        console.log(mail)
                                                        axios.post(`http://localhost:8080/comments/delete/`, mail)
                                                            .then((res) => {
                                                                console.log(res.status)
                                                                window.location.reload()
                                                            })
                                                            .catch((err)=> {
                                                                console.log(err.status)
                                                                alert('삭제 실패')
                                                            })
                                                    }}/>
                                                </Col>
                                            </Row>
                                        </Container>
                        ))}
            </div>
        </>
    );
};

export default Comment;