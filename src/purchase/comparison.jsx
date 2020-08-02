import React, { useState} from 'react';
import {connect, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import Slider from 'react-slick';
import Breadcrumb from '../common/breadcrumb';
// import {removeFromCompare, addToCart, addToCartUnsafe} from '../atomic/actions'
// import * as types from "../atomic/constants/ActionTypes";
import {toast} from "react-toastify";

const REMOVE_FROM_COMPARE = 'REMOVE_FROM_COMPARE'
const ADD_TO_CART = 'ADD_TO_CART'

const removeFromCompare = product_id => ({
    type: REMOVE_FROM_COMPARE,
    product_id
});
const addToCart = (product,qty) => (dispatch) => {
    toast.success("Item Added to Cart");
    dispatch(addToCartUnsafe(product, qty))

}
export const addToCartUnsafe = (product, qty) => ({
    type: ADD_TO_CART,
    product,
    qty
});

const Comparison = (props) => {
    const [quantity,setquantity] = useState(0)
    const Items = useSelector(state =>state.compare.items)
    const symbol = useSelector(state =>state.data.symbol)
    const changeQty = (e) => {
        setquantity(parseInt(e.target.value))
    }
        var settings = {
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 586,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }

        // const { addToCart, removeFromCompare} = props;

        return (
            <div>
                <Breadcrumb title={'Compare'} />
                {Items.length>0 ?
                <section className="compare-section section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <Slider {...settings} className="slide-4">
                                    {Items.map((item,index) =>
                                        <div key={index}>
                                            <div className="compare-part">
                                                <button type="button" className="close-btn" onClick={() => removeFromCompare(item)}>
                                                    <span aria-hidden="true">×</span>
                                                </button>
                                                <div className="img-secton">
                                                    <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${item.id}`}>
                                                    <img src={item.variants?
                                                                item.variants[0].images
                                                                :item.pictures[0]} className="img-fluid" alt="" />
                                                    <h5>{item.name}</h5></Link>
                                                    <h5>{symbol}{(item.price*item.discount/100)}
                                                        <del><span className="money">{symbol}{item.price}</span></del></h5>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>연간유지비</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.shortDetails}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>연료</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.tags}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>평균연비</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.size}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>가격</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.colors}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>연간 평균 연비</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>In stock</p>
                                                    </div>
                                                </div>
                                                <div className="btn-part">
                                                    <a href="javascript:void(0)" className="btn btn-solid" onClick={() => addToCart(item, 1)}>add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
                :
                <section className="cart-section section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div >
                                    <div className="col-sm-12 empty-cart-cls text-center">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/empty-compare.png`} className="img-fluid mb-4" alt="" />
                                        <h3>
                                            <strong>Compare List is Empty</strong>
                                        </h3>
                                        <h4>Explore more shortlist some items.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                }
            </div>
        )

}

export default Comparison

// export default connect(
//     mapStateToProps,
//     {removeFromCompare, addToCart}
// )(Comparison)