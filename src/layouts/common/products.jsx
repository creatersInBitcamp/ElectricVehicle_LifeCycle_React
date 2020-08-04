import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {useDispatch, useSelector} from 'react-redux'
import {getBestSeller, getMensWear, getWomensWear} from '../../atomic/services/index'
import ProductItem from './product-item';
import {addToCompare} from '../../compare/compareReducer'
import {addToWishlist} from '../../wishlist/wishlistReducer'
import {addToCart} from '../../cart/cartReducer'

const SpecialProducts = () => {
    const {bestSeller,mensWear,womensWear,symbol} = useSelector(state=>({
        bestSeller: getBestSeller(state.data.products),
        mensWear: getMensWear(state.data.products),
        womensWear: getWomensWear(state.data.products),
        symbol: state.data.symbol
    }))
    const dispatch = useDispatch()
    return <>
        <div>
            <div className="title1 section-t-space">
                <h4>exclusive products</h4>
                <h2 className="title-inner1">special products</h2>
            </div>
            <section className="section-b-space p-t-0">
                <div className="container">
                    <Tabs className="theme-tab">
                        <TabList className="tabs tab-title">
                            <Tab>New</Tab>
                            <Tab>Used</Tab>
                            <Tab>Post</Tab>
                        </TabList>
                        <TabPanel>
                            <div className="no-slider row">
                                { bestSeller.map((product, index ) =>
                                    <ProductItem product={product} symbol={symbol}
                                                 onAddToCompareClicked={()=>{dispatch(addToCompare(product))}}
                                                 onAddToWishlistClicked={()=>{dispatch(addToWishlist(product))}}
                                                 onAddToCartClicked={()=>{dispatch(addToCart(product, 1))}} key={index} /> )
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="no-slider row">
                                { mensWear.map((product, index ) =>
                                    <ProductItem product={product} symbol={symbol}
                                                 onAddToCompareClicked={()=>{dispatch(addToCompare(product))}}
                                                 onAddToWishlistClicked={()=>{dispatch(addToWishlist(product))}}
                                                 onAddToCartClicked={()=>{dispatch(addToCart(product, 1))}} key={index} /> )
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className=" no-slider row">
                                { womensWear.map((product, index ) =>
                                    <ProductItem product={product} symbol={symbol}
                                                 onAddToCompareClicked={()=>{dispatch(addToCompare(product))}}
                                                 onAddToWishlistClicked={()=>{dispatch(addToWishlist(product))}}
                                                 onAddToCartClicked={()=>{dispatch(addToCart(product, 1))}} key={index} /> )
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </section>
        </div>
    </>
}
export default SpecialProducts