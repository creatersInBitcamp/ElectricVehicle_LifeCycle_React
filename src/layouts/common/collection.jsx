import React from 'react';
import Slider from 'react-slick';
import {useDispatch, useSelector} from 'react-redux'

import {getTrendingCollection} from '../../atomic/services/index'
import {Product4, Product5} from '../../atomic/services/script'
import {addToCart} from '../../cart/cartReducer'
import {addToWishlist} from '../../wishlist/wishlistReducer'
import {addToCompare} from "../../compare/compareReducer";
import ProductItem from './product-style-five';

const TopCollection = () => {
    const {items, symbol, type} = useSelector(({state,ownProps})=>({
        items: getTrendingCollection(state.data.products, ownProps.type),
        symbol: state.data.symbol,
        type: state.type
    }))
    const dispatch = useDispatch()

    let properties;
    if(type === 'kids'){
        properties = Product5
    }else{
        properties = Product4
    }

    return <>
        <div>
            {/*Paragraph*/}
            <div className="title1  section-t-space">
                <h4>special offer</h4>
                <h2 className="title-inner1">top collection</h2>
            </div>
            {/*Paragraph End*/}
            <section className="section-b-space p-t-0">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Slider {...properties} className="product-4 product-m no-arrow">
                                { items.map((product, index ) =>
                                    <div key={index}>
                                        <ProductItem product={product} symbol={symbol}
                                                     onAddToCompareClicked={()=>{dispatch(addToCompare(product))}}
                                                     onAddToWishlistClicked={()=>{dispatch(addToWishlist(product))}}
                                                     onAddToCartClicked={()=>{dispatch(addToCart(product, 1))}} key={index} />
                                    </div>)
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
}
export default TopCollection