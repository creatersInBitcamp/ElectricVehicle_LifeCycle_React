import React from 'react';
import {Link} from 'react-router-dom';

export const PostItem = props => {
    const {post} = props;

    return <>
        <div className="product-box">
            <div className="img-wrapper">
                <div className="front">
                    <Link to={`${process.env.PUBLIC_URL}/board/details/${post.postId}`} >
                        <img src={post.img} alt="post img"/>
                    </Link>
                </div>
                <div className="cart-info cart-wrap">
                    <a title="Add to Wishlist">
                        <i className="fa fa-heart" aria-hidden="true"/>
                    </a>
                </div>
            </div>
            <div className="product-detail">
                <div>
                    <Link to={`${process.env.PUBLIC_URL}/board/details/${post.postId}`}>
                        <h6>{post.title}</h6>
                    </Link>
                </div>
            </div>
        </div>
    </>
}
export default PostItem;