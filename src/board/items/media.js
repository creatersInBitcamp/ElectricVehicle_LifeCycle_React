import React from 'react';
import {Link} from "react-router-dom";

const Media = ({post}) => {
    return (
        <>
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
                        <Link to={{pathname:`${process.env.PUBLIC_URL}/board/details/${post.postId}`, state: post}} ><h4>titles</h4></Link>
                        <ul className="post-social">
                            <li>Posted By : {post.name}</li>
                            <li><i className="fa fa-heart"/> {post.hits} Hits</li>
                            <li><i className="fa fa-comments"/> {post.comments.length} Comment</li>
                        </ul>
                        <p>contents</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Media;