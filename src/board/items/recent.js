import React from 'react';
import {Link} from "react-router-dom";

const Recent = ({posts}) => {
    return (
        <>
            { posts.map( post => (
                <li key={post.postId}>
                    <div className="media">
                        <Link to={`${process.env.PUBLIC_URL}/board/details/${post.postId}`}>
                            <img className="img-fluid" src={post.img} alt="Generic placeholder image" />
                        </Link>
                        <div className="media-body align-self-center">
                            <h6>{post.date}</h6>
                            <p>{post.hits} hits</p>
                        </div>
                    </div>
                </li>
            ) )}
        </>
    );
};

export default Recent;