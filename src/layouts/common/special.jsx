import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'

import {getSpecialCollection} from '../../atomic/services/index'
import ProductItem from './special-product-item';
import {addToCart,incrementQty,decrementQty,removeFromCart} from "../../cart/cartReducer";
import {addToWishlist} from "../../wishlist/wishlistReducer";
import {addToCompare} from "../../compare/compareReducer";

const Special = props => {

    const {product,symbol} = useSelector((state,Ownprops) => ({
        product: getSpecialCollection(state.data.products, Ownprops.type),
        symbol: state.data.symbol
    }))

    const dispatch = useDispatch()
    return <>
        <div>
            {/*Paragraph*/}
            <section className="section-b-space addtocart_count">
                <div className="full-box">
                    <div className="container">
                        <div className="title4">
                            <h2 className="title-inner4">special products</h2>
                            <div className="line"><span/></div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="theme-card center-align">
                                    <div className="offer-slider">
                                        <div className="sec-1">
                                            <div className="product-box2">
                                                <div className="media">
                                                    <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product[0].id}`} >
                                                        <img
                                                            className="img-fluid blur-up lazyload"
                                                            src={product[0].pictures[0]} alt="" />
                                                    </Link>
                                                    <div className="media-body align-self-center">
                                                        <div className="rating">
                                                            <i className="fa fa-star"/>
                                                            <i className="fa fa-star"/>
                                                            <i className="fa fa-star"/>
                                                            <i className="fa fa-star"/>
                                                            <i className="fa fa-star"/>
                                                        </div>
                                                        <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product[0].id}`} >
                                                            <h6>{product[0].name}</h6>
                                                        </Link>
                                                        <h4>{symbol}{product[0].price-(product[0].price*product[0].discount/100)}
                                                            <del><span className="money">{symbol}{product[0].price}</span></del>
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-box2">
                                                <div className="media">
                                                    <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product[1].id}`} >
                                                        <img
                                                            className="img-fluid blur-up lazyload"
                                                            src={product[1].pictures[0]} alt="" />
                                                    </Link>
                                                    <div className="media-body align-self-center">
                                                        <div className="rating">
                                                            <i className="fa fa-star"/>
                                                            <i className="fa fa-star"/>
                                                            <i className="fa fa-star"/>
                                                            <i className="fa fa-star"/>
                                                            <i className="fa fa-star"/>
                                                        </div>
                                                        <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product[1].id}`} >
                                                            <h6>{product[1].name}</h6>
                                                        </Link>
                                                        <h4>{symbol}{product[1].price-(product[1].price*product[1].discount/100)}
                                                            <del><span className="money">{symbol}{product[1].price}</span></del>
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 center-slider">
                                <div>
                                    <div className="offer-slider">
                                        <div>
                                            <ProductItem product={product[2]} symbol={symbol}
                                                         onAddToCompareClicked={()=>{dispatch(addToCompare(product[2]))}}
                                                         onAddToWishlistClicked={()=>{dispatch(addToWishlist(product[2]))}}
                                                         onAddToCartClicked={()=>{dispatch(addToCart(product[2], 1))}}
                                                         onIncrementClicked={()=>{dispatch(incrementQty(product[2], 1))}}
                                                         onDecrementClicked={()=>{dispatch(decrementQty(product[2].id))}}
                                                         onRemoveFromCart={()=>{dispatch(removeFromCart(product[2]))}}  />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="theme-card center-align">
                                    <div className="offer-slider">
                                        <div className="sec-1">
                                            <div className="product-box2">
                                                <div className="media">
                                                    <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product[3].id}`} >
                                                        <img
                                                            className="img-fluid blur-up lazyload"
                                                            src={product[3].pictures[0]} alt="" />
                                                    </Link>
                                                    <div className="media-body align-self-center">
                                                        <div className="rating">
                                                            <i className="fa fa-star"/>
                                                            <i className="fa fa-star"/>
                                                            <i className="fa fa-star"/>
                                                            <i className="fa fa-star"/>
                                                            <i className="fa fa-star"/>
                                                        </div>
                                                        <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product[3].id}`} >
                                                            <h6>{product[3].name}</h6>
                                                        </Link>
                                                        <h4>{symbol}{product[3].price-(product[3].price*product[3].discount/100)}
                                                            <del><span className="money">{symbol}{product[3].price}</span></del>
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-box2">
                                                <div className="media">
                                                    <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product[4].id}`} >
                                                        <img
                                                            className="img-fluid blur-up lazyload"
                                                            src={product[4].pictures[0]} alt="" />
                                                    </Link>
                                                    <div className="media-body align-self-center">
                                                        <div className="rating">
                                                            <i className="fa fa-star"/>
                                                            <i className="fa fa-star"/>
                                                            <i className="fa fa-star"/>
                                                            <i className="fa fa-star"/>
                                                            <i className="fa fa-star"/>
                                                        </div>
                                                        <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product[4].id}`} >
                                                            <h6>{product[4].name}</h6>
                                                        </Link>
                                                        <h4>{symbol}{product[4].price-(product[4].price*product[4].discount/100)}
                                                            <del><span className="money">{symbol}{product[4].price}</span></del>
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
}
export default Special