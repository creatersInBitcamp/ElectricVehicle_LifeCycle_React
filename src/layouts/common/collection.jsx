import React from 'react';
import Slider from 'react-slick';
import {connect} from 'react-redux'
import {getTrendingCollection} from '../../atomic/services/index'
import {Product4, Product5} from '../../atomic/services/script'
import ProductItem from '../../features/product/common/product-style-five';

const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST'

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
const addToWishlistUnsafe = (product) => ({
    type: ADD_TO_WISHLIST,
    product
});
const TopCollection = (props) => {
        const {items, symbol, addToCart, addToWishlist, addToCompare, type} = props;
        var properties;
        if(type === 'kids'){
            properties = Product5
        }else{
            properties = Product4
        }
        return (
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
                                                     onAddToCompareClicked={() => addToCompare(product)}
                                                     onAddToWishlistClicked={() => addToWishlist(product)}
                                                     onAddToCartClicked={() => addToCart(product, 1)} key={index} />
                                        </div>)
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
}
const mapStateToProps = (state, ownProps) => ({
    items: getTrendingCollection(state.data.products, ownProps.type),
    symbol: state.data.symbol
})
export default connect(mapStateToProps, {addToCart, addToWishlist, addToCompare}) (TopCollection);