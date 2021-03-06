import React from 'react';
import {Link} from "react-router-dom";
import Row from "react-bootstrap/Row";

const Media = ({posts}) => {
    return (
        <>
                <>
            {posts.map( post => (
                    <Row key={post.postId }>
                        <div className="col-xl-6">
                            <div className="blog-left">
                                <Link to={`${process.env.PUBLIC_URL}/board/details/${post.postId}`}>
                                    <img src={post.img} className="img-fluid" alt="대표이미지" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="blog-right">
                                <div>
                                    <h6>{post.date}</h6>
                                    <Link to={`${process.env.PUBLIC_URL}/board/details/${post.postId}`} ><h4>{post.title}</h4></Link>
                                    <ul className="post-social">
                                        <li>Posted By : {post.userId}</li>
                                        <li><i className="fa fa-heart"/> {post.recommendation} like</li>
                                        <li><i className="fa fa-flag"/> {post.hits} hits</li>
                                        <li><i className="fa fa-comments"/> {post.comments === undefined? 0 : post.comments.length} Comment</li>
                                    </ul>
                                    <p>{post.content}</p>
                                </div>
                            </div>
                        </div>
                    </Row>
            ))}
                </>
        </>
    );
};

export default Media;