import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export const ProductItem = props => {
    const [open,setOpen] = useState(false)
    const [stock,setStock] = useState('InStock')
    const [quantity,setQuantity] = useState(1)
    const [image,setImage] = useState('')


    const {product, symbol, onAddToWishlistClicked} = props;

    return <>
        <div className="product-box">
            <div className="img-wrapper">
                <div className="front">
                    <Link to={`${process.env.PUBLIC_URL}/used-car/product/${product.usedCarId}`}>
                        <img src={product.usedCar.img.img1} className={"img-fluid"}/>
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
                        <h6>{product.age}</h6>
                    </Link>
                    <h4>{product.price}{symbol}</h4>
                </div>
            </div>
        </div>
    </>
}
export default ProductItem;