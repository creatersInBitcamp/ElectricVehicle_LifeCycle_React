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
                    <Link to={`${process.env.PUBLIC_URL}/used-car/product/${product.eccarId}`} >
                        <img src={product.img}/>
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
                    <Link to={`${process.env.PUBLIC_URL}/used-car/product/${product.id}`}>
                        <h6>{product.name}</h6>
                    </Link>
                    <h4>{product.price}{symbol}</h4>
                </div>
            </div>
        </div>
    </>
}
export default ProductItem;