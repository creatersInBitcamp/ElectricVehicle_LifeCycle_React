import React from 'react';

const Popular = (post) => {
    return (
        <>
            <li>
                <div className="media">
                    <div className="blog-date">
                        <span>03</span>
                        <span>aug</span>
                    </div>
                    <div className="media-body align-self-center">
                        <h6>{post.content}</h6>
                        <p>{post.hits} hits</p>
                    </div>
                </div>
                <p> contents </p>
            </li>
        </>
    );
};

export default Popular;