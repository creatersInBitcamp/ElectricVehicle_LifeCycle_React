import React, {Component} from 'react';
import Slider from 'react-slick';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

import {getBestSeller} from "../atomic/services";
// import {addToCart, addToWishlist, addToCompare, addToWishlistUnsafe, addToCompareUnsafe} from "../atomic/actions";
import ProductItem from '../layouts/common/product-item';
import {toast} from "react-toastify";
// import * as types from "../atomic/constants/ActionTypes";

export const ADD_TO_CART = 'ADD_TO_CART'
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST'
export const ADD_TO_COMPARE = 'ADD_TO_COMPARE'

const addToCart = (product,qty) => (dispatch) => {
    toast.success("Item Added to Cart");
    dispatch(addToCartUnsafe(product, qty))

}
const addToCartUnsafe = (product, qty) => ({
    type: ADD_TO_CART,
    product,
    qty
})
const addToWishlist = (product) => (dispatch) => {
    toast.success("Item Added to Wishlist");
    dispatch(addToWishlistUnsafe(product))

}
const addToCompare = (product) => (dispatch) => {
    toast.success("Item Added to Compare");
    dispatch(addToCompareUnsafe(product))

}
const addToWishlistUnsafe = (product) => ({
    type: ADD_TO_WISHLIST,
    product
});
const addToCompareUnsafe= (product) => ({
    type: ADD_TO_COMPARE,
    product
});

class RelatedProduct extends Component {
    render (){
        const {items, symbol, addToCart, addToWishlist, addToCompare} = this.props;


        return (
            <section className="section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-12 product-related">
                            <h2>related products</h2>
                        </div>
                    </div>
                    <div className="row search-product">
                        { items.slice(0, 6).map((product, index ) =>
                            <div key={index} className="col-xl-2 col-md-4 col-sm-6">
                                <ProductItem product={product} symbol={symbol}
                                             onAddToCompareClicked={() => addToCompare(product)}
                                             onAddToWishlistClicked={() => addToWishlist(product)}
                                             onAddToCartClicked={() => addToCart(product, 1)} key={index} />
                            </div>)
                        }
                    </div>
                </div>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        items: getBestSeller(state.data.products),
        symbol: state.data.symbol
    }
}

export default connect(mapStateToProps, {addToCart, addToWishlist, addToCompare})(RelatedProduct);
