import React, {Component, useState} from 'react';
import {connect, useSelector} from 'react-redux'
import {Link} from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

import {getVisibleproducts} from '../../atomic/services';
import ProductListItem from "./product-list-item";
import {toast} from "react-toastify";

const ADD_TO_CART = 'ADD_TO_CART'
const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST'
const ADD_TO_COMPARE = 'ADD_TO_COMPARE'
const addToCart = (product,qty) => (dispatch) => {
    toast.success("Item Added to Cart");
    dispatch(addToCartUnsafe(product, qty))

}
const addToWishlist = (product) => (dispatch) => {
    toast.success("Item Added to Wishlist");
    dispatch(addToWishlistUnsafe(product))

}
const addToCompare = (product) => (dispatch) => {
    toast.success("Item Added to Compare");
    dispatch(addToCompareUnsafe(product))
}

const addToCartUnsafe = (product, qty) => ({
    type: ADD_TO_CART,
    product,
    qty
});
export const addToWishlistUnsafe = (product) => ({
    type: ADD_TO_WISHLIST,
    product
});
export const addToCompareUnsafe= (product) => ({
    type: ADD_TO_COMPARE,
    product
});

const ProductListing = (props) => {
    const [limit,setlimit] = useState(5)
    const [hasMoreItems,sethasMoreItems] = useState(true)
    const products = useSelector(state => getVisibleproducts(state.data, state.filters))
    const symbol = useSelector(state => state.data.symbol)
    

    const componentWillMount = () => {
        fetchMoreItems();
    }

   const fetchMoreItems = () => {
        if (limit >= products.length) {
            sethasMoreItems( false );
            return;
        }
        // a fake async api call
        setTimeout(() => {
            setlimit(limit + 5);
        }, 3000);


    }

    
        console.log(props.colSize)
        return (
            <div>
                <div className="product-wrapper-grid">
                    <div className="container-fluid">
                        {products.length > 0 ?
                            <InfiniteScroll
                                dataLength={limit} //This is important field to render the next data
                                next={fetchMoreItems}
                                hasMore={hasMoreItems}
                                loader={<div className="loading-cls"></div>}
                                endMessage={
                                    <p className="seen-cls seen-it-cls">
                                        <b>Yay! You have seen it all</b>
                                    </p>
                                }
                            >
                                <div className="row">
                                    { products.slice(0, limit).map((product, index) =>
                                        <div className={`${props.colSize===3?'col-xl-3 col-md-6 col-grid-box':'col-lg-'+props.colSize}`} key={index}>
                                        <ProductListItem product={product} symbol={symbol}
                                                         onAddToCompareClicked={() => addToCompare(product)}
                                                         onAddToWishlistClicked={() => addToWishlist(product)}
                                                         onAddToCartClicked={addToCart} key={index}/>
                                        </div>)
                                    }
                                </div>
                            </InfiniteScroll>
                            :
                            <div className="row">
                                <div className="col-sm-12 text-center section-b-space mt-5 no-found" >
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/empty-search.jpg`} className="img-fluid mb-4" />
                                    <h3>Sorry! Couldn't find the product you were looking For!!!    </h3>
                                    <p>Please check if you have misspelt something or try searching with other words.</p>
                                    <Link to={`${process.env.PUBLIC_URL}/`} className="btn btn-solid">continue shopping</Link>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    
}


export default ProductListing
