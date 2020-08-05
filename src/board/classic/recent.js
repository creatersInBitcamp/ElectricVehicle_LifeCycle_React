import React from 'react';
import {Link} from "react-router-dom";

const Recent = ({post}) => {
    return (
        <>
            <li>
                <div className="media">
                    <Link to={`${process.env.PUBLIC_URL}/board/details`}><img className="img-fluid" src={post.img}
                         alt="Generic placeholder image" /></Link>
                    <div className="media-body align-self-center">
                        <h6>{post.dateTime}</h6>
                        <p>{post.hits} hits</p>
                    </div>
                </div>
            </li>
        </>
    );
};

export default Recent;