import React from 'react';
import Slider from 'react-slick';
import {useDispatch, useSelector} from 'react-redux'
import {getTrendingCollection} from '../atomic/services'
import {Product4, Product5} from '../atomic/services/script'
import ProductItem from './common/product-style-five';
import {addToCart} from "../cart/cartReducer";
import {addToWishlist} from "../wishlist/wishlistReducer";
import {addToCompare} from "../compare/compareReducer";

const TopCollection = props => {
    const {type} = props
    const {items,symbol} = useSelector((state)=>({
        items: getTrendingCollection(state.data.products, type),
        symbol: state.data.symbol
    }))
    let properties;
    if(type === 'kids'){
        properties = Product5
    }else{
        properties = Product4
    }

    const dispatch = useDispatch()
    return <>
        <div>
            {/*Paragraph*/}
            <div className="title1  section-t-space">
                <h4>most</h4>
                <h2 className="title-inner1">popular</h2>
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