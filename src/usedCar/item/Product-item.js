import React from 'react';
import {Link} from 'react-router-dom';
export const ProductItem = (props) => {
    const {product, symbol, onAddToWishlistClicked} = props;
    return <>
        <div className="product-box">
            <div className="img-wrapper">
                <div className="front">
                    <Link to={`${process.env.PUBLIC_URL}/used-car/product/${product.usedCarId}`}>
                        <img src={product.img.img1} className={"img-fluid"} alt={''}/>
                    </Link>
                </div>
                <div className="cart-info cart-wrap">
                    <a title="Add to Wishlist" onClick={()=>{onAddToWishlistClicked(product)}} >
                        <i className="fa fa-heart" aria-hidden="true"/>
                    </a>
                </div>
            </div>
            <div className="product-detail">
                <div>
                    <Link to={`${process.env.PUBLIC_URL}/used-car/product/${product.usedCarId}`}>
                        <h6>{product.carName}&nbsp;{product.age}</h6>
                    </Link>
                    <h4>{parseInt(product.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{symbol}</h4>
                </div>
            </div>
        </div>
    </>
}
export default ProductItem;