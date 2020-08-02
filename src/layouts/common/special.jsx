import React from 'react';
import {Link} from 'react-router-dom';
import {connect, useSelector} from 'react-redux'
import { getSpecialCollection} from '../../atomic/services/index'
import ProductItem from './special-product-item';

export const addToCart = (product,qty) => (dispatch) => {
    toast.success("Item Added to Cart");
    dispatch(addToCartUnsafe(product, qty))

}
export const addToWishlist = (product) => (dispatch) => {
    toast.success("Item Added to Wishlist");
    dispatch(addToWishlistUnsafe(product))

}
export const addToCompare = (product) => (dispatch) => {
    toast.success("Item Added to Compare");
    dispatch(addToCompareUnsafe(product))

}
export const incrementQty = (product,qty) => (dispatch) => {
    toast.success("Item Added to Cart");
    dispatch(addToCartUnsafe(product, qty))

}
export const decrementQty = productId => (dispatch) => {
    toast.warn("Item Decrement Qty to Cart");

    dispatch({
        type: types.DECREMENT_QTY,
        productId})
};
export const removeFromCart = product_id => (dispatch) => {
    toast.error("Item Removed from Cart");
    dispatch({
        type: types.REMOVE_FROM_CART,
        product_id
    })
};

const Special = props => {
         const product = useSelector(state => getSpecialCollection(state.data.products, Ownprops.type))
         const symbol = useSelector(state => state.data.symbol)
         const {addToCart, addToWishlist, addToCompare, incrementQty, decrementQty, removeFromCart} = props;
         return (
            <div>
                {/*Paragraph*/}
                <section className="section-b-space addtocart_count">
                    <div className="full-box">
                        <div className="container">
                            <div className="title4">
                                <h2 className="title-inner4">special products</h2>
                                <div className="line"><span></span></div>
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
                                                            <div className="rating"><i className="fa fa-star"></i> <i
                                                                className="fa fa-star"></i> <i
                                                                className="fa fa-star"></i> <i
                                                                className="fa fa-star"></i> <i
                                                                className="fa fa-star"></i></div>
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
                                                            <div className="rating"><i className="fa fa-star"></i> <i
                                                                className="fa fa-star"></i> <i
                                                                className="fa fa-star"></i> <i
                                                                className="fa fa-star"></i> <i
                                                                className="fa fa-star"></i></div>
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
                                                             onAddToCompareClicked={() => addToCompare(product[2])}
                                                             onAddToWishlistClicked={() => addToWishlist(product[2])}
                                                             onAddToCartClicked={() => addToCart(product[2], 1)}
                                                             onIncrementClicked={() => incrementQty(product[2], 1)}
                                                             onDecrementClicked={() => decrementQty(product[2].id)}
                                                             onRemoveFromCart={() => removeFromCart(product[2])}  />
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
                                                            <div className="rating"><i className="fa fa-star"></i> <i
                                                                className="fa fa-star"></i> <i
                                                                className="fa fa-star"></i> <i
                                                                className="fa fa-star"></i> <i
                                                                className="fa fa-star"></i></div>
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
                                                            <div className="rating"><i className="fa fa-star"></i> <i
                                                                className="fa fa-star"></i> <i
                                                                className="fa fa-star"></i> <i
                                                                className="fa fa-star"></i> <i
                                                                className="fa fa-star"></i></div>
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
        )
}




export default Special