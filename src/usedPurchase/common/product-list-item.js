import React, {useState} from 'react';
import {Link} from 'react-router-dom';


const ProductListItem = props => {
    const {product, symbol, onAddToCartClicked, onAddToWishlistClicked, onAddToCompareClicked} = props;
    const [image,setImage] = useState('')

    const onClickHandle = img =>{
        setImage({ image : img} );
    }

    return (
        <div className="product-box">
            <div className="img-wrapper">
                <div className="front">
                    <Link to={`${process.env.PUBLIC_URL}/product-detail/product/${product.id}`} ><img
                        src={product.variants?
                            image?image:product.variants[0].images
                            :product.pictures[0]}
                        className="img-fluid"
                        alt="" /></Link>
                </div>
                <div className="cart-info cart-wrap">
                    <button title="Add to cart" onClick={onAddToCartClicked}>
                        <i className="fa fa-shopping-cart" aria-hidden="true"/>
                    </button>
                    <a title="Add to Wishlist" onClick={onAddToWishlistClicked} >
                        <i className="fa fa-heart" aria-hidden="true"/>
                    </a>
                    <Link to={`${process.env.PUBLIC_URL}/compare`} title="Compare" onClick={onAddToCompareClicked}>
                        <i className="fa fa-refresh" aria-hidden="true"/></Link>
                </div>
            </div>
            <div className="product-detail">
                <div>
                    <Link to={`${process.env.PUBLIC_URL}/product-detail/product/${product.id}`}>
                        <h6>{product.name}</h6>
                    </Link>
                    <h4>{symbol}{product.price}</h4>
                </div>
            </div>
        </div>
    )

}

export default ProductListItem;