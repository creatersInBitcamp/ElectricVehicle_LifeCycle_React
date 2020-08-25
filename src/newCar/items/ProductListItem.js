import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';


export const ProductListItem = props => {

    const {product, symbol, onAddToCartClicked, onAddToWishlistClicked, onAddToCompareClicked, check} = props;
    const [image,setImage] = useState('')

    useEffect(()=>{
        setImage('')
    },[product])
    
    const onClickHandle = img =>{
        setImage(img);
    }

    return (
        <div className="product-box">
            <div className="img-wrapper">
                <div className="lable-block">
                    {(product.new)? <span className="lable3">new</span> : ''}
                </div>
                <div className="front">
                    <Link to={`${process.env.PUBLIC_URL}/new-car/product/${product.eccarId}`} ><img
                        src={product.variants?
                                image?image
                                    :product.variants[0].images
                            :product.img}
                        className="img-fluid"
                        alt="" /></Link>
                </div>
                <div className="cart-info cart-wrap">
                    <button title="Add to cart" onClick={() => onAddToCartClicked(product, 1)}>
                        <i className="fa fa-shopping-cart" aria-hidden="true"/>
                    </button>
                    <a title="Add to Wishlist" onClick={onAddToWishlistClicked} >
                        <i className="fa fa-heart" aria-hidden="true"/>
                    </a>
                    <Link to={`${process.env.PUBLIC_URL}/new-car/compare`} title="Compare" onClick={onAddToCompareClicked}>
                        <i className="fa fa-refresh" aria-hidden="true"/></Link>
                </div>
                {
                    check ? (
                        product.variants ?(
                            <ul className="product-thumb-list">
                                {
                                    product.variants.map((vari, i) => {
                                        return (
                                            <li
                                                className={`grid_thumb_img ${(vari.images === image) ? 'active' : ''}`}
                                                key={i}>
                                                <a title="Add to Wishlist">
                                                    <img src={`${vari.images}`} onClick={() => onClickHandle(vari.images)}/>
                                                </a>
                                            </li>)
                                    })
                                }
                            </ul>
                        ): ''
                    )
                    : null
                }

            </div>
            <div className="product-detail">
                <div>
                    <Link to={`${process.env.PUBLIC_URL}/new-car/product/${product.eccarId}`}>
                        <h6>{product.carName}</h6>
                    </Link>
                    <h4><span className="money">{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{symbol}</span></h4>
                    {product.variants?
                        <ul className="color-variant">
                            {product.variants.map((vari, i) => {
                                return (
                                    <li className={vari.color} key={i} title={vari.color} onClick={() => onClickHandle(vari.images)}/>)
                            })}
                        </ul>:''}
                </div>
            </div>
        </div>
    )

}

export default ProductListItem;