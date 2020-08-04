import React, {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom'
import Slider from 'react-slick';
import Modal from 'react-responsive-modal';
import MarketPrice from "../../MarketPrice";


const DetailsWithPrice = props => {
    const [state, setState] = useState({
        open:false,
        quantity:1,
        stock: 'InStock',
        nav3: null
    });

    const slider3 = useRef();

    useEffect(() => {
        setState({
            nav3: slider3.current
        });
    }, []);

    const { open, quantity, stock, nav3 } = state;

    const {symbol, item, addToCartClicked, BuynowClicked, addToWishlistClicked} = props

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
                <h2> {item.name} </h2>
                <h3>{symbol}{item.price} </h3>
                {item.variants?
                    <ul >
                        <Slider {...colorsnav} asNavFor={props.navOne} ref={slider => (slider3.current = slider)} className="color-variant">
                            {item.variants.map((vari, i) => {
                                return <li className={vari.color} key={i} title={vari.color}/>
                            })}
                        </Slider>
                    </ul>:''}
                <div className="product-description border-product">

                </div>
                <div className="product-buttons" >
                    <a className="btn btn-solid" onClick={() => addToCartClicked(item, quantity)}>add to cart</a>
                    <Link to={`${process.env.PUBLIC_URL}/checkout`} className="btn btn-solid" onClick={() => BuynowClicked(item, quantity)} >buy now</Link>
                </div>
                <div className="border-product">
                    <div className="product-icon">
                        <button className="wishlist-btn" onClick={() => addToWishlistClicked(item)}><i
                            className="fa fa-heart"/><span
                            className="title-font">Add To WishList</span>
                        </button>
                    </div>
                </div>
                <div className="border-product">
                    <h6 className="product-title">product details</h6>
                    <p>{item.shortDetails}</p>
                </div>
            </div>
        </div>
    )
}


export default DetailsWithPrice;