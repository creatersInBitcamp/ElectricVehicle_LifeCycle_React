import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-responsive-modal';

export const ProductStyleFive = props => {
    const [image,setImage] = useState('')

    const onClickHandle = (img) => {
        setImage(img)
    }

    const {product, symbol, onAddToCartClicked, onAddToWishlistClicked, onAddToCompareClicked} = props;

    return <>
        {console.log(product)}
        <div className="product-box product-wrap">
            <div className="img-wrapper">
                <div className="lable-block">
                    {(product.yyyy>2020)? <span className="lable3">new</span> : ''}
                </div>
                <div className="front">
                    <Link to={`${process.env.PUBLIC_URL}/new-car/product/${product.eccarId}`} ><img
                        src={product.variants?
                            image?image:product.variants[0].images
                            :product.img}
                        className="img-fluid"
                        alt="" /></Link>
                </div>
                <div className="back">
                    <Link to={`${process.env.PUBLIC_URL}/new-car/product/${product.eccarId}`} ><img
                        src={
                            product.variants?
                                image?image:product.variants[0].images
                                :product.img
                        }
                        className="img-fluid"
                        alt="" /></Link>
                </div>
                <div className="cart-box">
                    <button title="Add to cart" onClick={()=>onAddToCartClicked(product)}>
                        <i className="fa fa-shopping-cart" aria-hidden="true"/>
                    </button>
                    <a title="Add to Wishlist" onClick={onAddToWishlistClicked} >
                        <i className="fa fa-heart" aria-hidden="true"/>
                    </a>
                    <Link to={`${process.env.PUBLIC_URL}/new-car/compare`} title="Compare" onClick={onAddToCompareClicked}>
                        <i className="fa fa-refresh" aria-hidden="true"/></Link>
                </div>
            </div>
            <div className="product-detail  text-center">
                <div>
                    <Link to={`${process.env.PUBLIC_URL}/new-car/product/${product.eccarId}`}>
                        <h6>{product.carName}</h6>
                    </Link>
                    <h4>{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{symbol}</h4>
                    {product.variants?
                        <ul className="color-variant">
                            {product.variants.map((vari, i) => {
                                return (
                                    <li className={vari.color} key={i} title={vari.color} onClick={()=>onClickHandle(vari.images)}/>)
                            })}
                        </ul>:''}
                </div>
            </div>
        </div>
    </>
}
export default ProductStyleFive;