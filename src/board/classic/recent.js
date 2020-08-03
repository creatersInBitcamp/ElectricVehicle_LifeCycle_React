import React from 'react';

const Recent = ({post}) => {
    return (
        <>
            <li>
                <div className="media">
                    <img className="img-fluid" src={post.img}
                         alt="Generic placeholder image" />
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