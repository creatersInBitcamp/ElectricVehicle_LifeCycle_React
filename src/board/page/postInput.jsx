import React, {useState} from 'react';
import Breadcrumb from "../../common/breadcrumb";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const initUser = {
    name: '이형태',
    userId: 'tedd911'
}

const PostInput = () => {
    const [user, setUser] = useState(initUser)
    const [post, setPost] = useState({})
    const onPostIn = (e) => {
        e.preventDefault()
        setPost({
           title : document.getElementById('title').value,
           content : document.getElementById('content').value,
           link : document.getElementById('link').value,
           userId : user.userId
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
                                        <input type="text" className="form-control" id="title"
                                               placeholder="Enter this title" required=""/>
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="link">link</label>
                                        <input type="text" className="form-control" id="link"
                                               placeholder="Link"
                                               required=""/>
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="content">내용</label>
                                        <textarea className="form-control" placeholder="Write Your Content" id="content"
                                                  rows="24"/>
                                    </div>
                                    <div className="col-md-12">
                                        <Container>
                                            <Row>
                                                <Col/>
                                                <Col xs lg={2}>
                                                    <button className="btn btn-solid" type={"submit"} onClick={onPostIn}>Post</button>
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