import React from 'react';
import Slider from 'react-slick';
import {useSelector} from 'react-redux'
import {getTrendingCollection} from '../../atomic/services/index'
import {Product4, Product5} from '../../atomic/services/script'
import ProductItem from '../common/product-style-five';
const TopCollection = props => {
    const {items,symbol} = useSelector((state,ownProps)=>({
        items: getTrendingCollection(state.data.products, ownProps.type),
        symbol: state.data.symbol
    }))
    let properties;
    if(props.type === 'kids'){
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
                                                     onAddToCompareClicked={props.addToCompare(product)}
                                                     onAddToWishlistClicked={props.addToWishlist(product)}
                                                     onAddToCartClicked={props.addToCart(product, 1)} key={index} />
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