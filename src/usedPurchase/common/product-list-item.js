import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const ProductListItem = props => {
    const [image] = useState('')
    return <>
        <div className="product-box">
            <div className="img-wrapper">
                <div className="front">
                    <Link to={`${process.env.PUBLIC_URL}/used-car/product/${props.product.id}`} >
                        <img src={props.product.variants?
                            image?image:props.product.variants[0].images
                            :props.product.pictures[0]}
                            className="img-fluid"
                            alt="" />
                    </Link>
                </div>
                <div className="cart-info cart-wrap">
                    <a title="Add to Wishlist" onClick={props.onAddToWishlistClicked} >
                        <i className="fa fa-heart" aria-hidden="true"/>
                    </a>
                </div>
            </div>
            <div className="product-detail">
                <div>
                    <Link to={`${process.env.PUBLIC_URL}/used-car/product/${props.product.id}`}>
                        <h6>{props.product.name}</h6>
                    </Link>
                    <h4>{props.symbol}{props.product.price}</h4>
                </div>
            </div>
        </div>
    </>

}

export default ProductListItem;