import React from 'react';
import {Link} from "react-router-dom";

const Media = ({post}) => {
    return (
        <>
            <div className="col-xl-6">
                <div className="blog-left">
                    <Link to={`${process.env.PUBLIC_URL}/board/details`} >
                        <img src={post.img} className="img-fluid" alt=""/>
                    </Link>
                </div>
            </div>
            <div className="col-xl-6">
                <div className="blog-right">
                    <div>
                        <h6>{post.date}</h6>
                        <Link to={`${process.env.PUBLIC_URL}/blog/details`} ><h4>you how all this mistaken idea of denouncing pleasure
                            and praising pain was born.</h4></Link>
                        <ul className="post-social">
                            <li>Posted By : {post.name}</li>
                            <li><i className="fa fa-heart"/> {post.hits} Hits</li>
                            <li><i className="fa fa-comments"/> {post.comments.length} Comment</li>
                        </ul>
                        <p>Consequences that are extremely painful. Nor again is there anyone
                            who loves or pursues or desires to obtain pain of itself, because it
                            is pain, but because occasionally circumstances occur in which toil
                            and pain can procure him some great pleasure.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Media;