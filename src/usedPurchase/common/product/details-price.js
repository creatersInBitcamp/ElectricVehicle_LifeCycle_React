import React, {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom'
import Slider from 'react-slick';
import Modal from 'react-responsive-modal';
import MarketPrice from "../../MarketPrice";
import {addToCart, addToCartUnsafe} from "../../../cart/cartReducer";
import {addToWishlist} from "../../../wishlist/wishlistReducer";


const DetailsWithPrice = props => {

    const [open,setOpen]=useState(false)
    const [quantity,setQuantity]=useState(1)
    const [stock,setStock]=useState('InStock')
    const [nav3,setNav3]=useState(null)

    const slider3 = useRef();

    useEffect(()=>{

        return () => {
            setNav3(slider3)
        }
    },[])

    const colorsnav = {
        slidesToShow: 6,
        swipeToSlide: true,
        arrows: false,
        dots: false,
        focusOnSelect: true
    };

    return (
        <div className="col-lg-6 rtl-text">
            <div className="product-right">
                <h2> {props.item.name} </h2>
                <h3>{props.symbol}{props.item.price} </h3>
                <div className="product-description border-product">
                    <div className="qty-box">
                        <MarketPrice/>
                    </div>
                </div>
                <div className="product-buttons" >
                    <a className="btn btn-solid" onClick={() => props.addToCartClicked(props.item, quantity)}>add to cart</a>
                    <Link to={`${process.env.PUBLIC_URL}/checkout`} className="btn btn-solid" onClick={() => props.BuynowClicked(props.item, quantity)} >buy now</Link>
                </div>
                <div className="border-product">
                    <div className="product-icon">
                        <button className="wishlist-btn" onClick={() => props.addToWishlistClicked(props.item)}><i
                            className="fa fa-heart"/><span
                            className="title-font">Add To WishList</span>
                        </button>
                    </div>
                </div>
                <div className="border-product">
                    <h6 className="product-title">product details</h6>
                    <p>{props.item.shortDetails}</p>
                </div>
            </div>
        </div>
    )
}


export default DetailsWithPrice;