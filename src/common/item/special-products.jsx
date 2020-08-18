import React, {useEffect, useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {useDispatch, useSelector} from 'react-redux'
import {getBestSeller, getSpecialUsed, getPosts, getWomensWear} from '../../atomic/services/services'
import {ProductItem}from '../../usedCar'
import {PostItem} from '../../board'
import {addToCompare,addToWishlist,addToCart,ProductListItem} from '../../newCar'
import {addToUsedWishlist} from "../../usedCar/page/UsedCarWishlist";
import axios from "axios";

export const SpecialProducts = () => {
    const {bestSeller,usedCar,womensWear,symbol} = useSelector(state=>({
        bestSeller: getBestSeller(state.data.products),
        usedCar: getSpecialUsed(state.usedData.products),
        womensWear: getWomensWear(state.data.products),
        // posts: receivePosts(),
        symbol: state.data.symbol
    }))
    useEffect(()=>{
        axios.get('http://localhost:8080/posts/getall')
            .then((res)=>{
                console.log('getPosts axios 작동')
                console.log(res.data)
                setPosts(res.data.slice(0,8))
            })
            .catch((err)=> {
                console.log(err.status)
            })
    }, [])
    const [posts, setPosts] = useState([])
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
                                    <ProductListItem product={product} symbol={symbol}
                                                 onAddToCompareClicked={()=>{dispatch(addToCompare(product))}}
                                                 onAddToWishlistClicked={()=>{dispatch(addToWishlist(product))}}
                                                 onAddToCartClicked={()=>{dispatch(addToCart(product, 1))}} key={index} check={false}/> )
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="no-slider row">
                                { usedCar.map((product, index ) =>
                                    <ProductItem product={product} symbol={symbol}
                                                 onAddToWishlistClicked={()=>{dispatch(addToUsedWishlist(product))}} key={index} /> )
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className=" no-slider row">
                                { posts.map((post, index ) =>
                                    // <ProductItem product={product} symbol={symbol}
                                    //              onAddToCompareClicked={()=>{dispatch(addToCompare(product))}}
                                    //              onAddToWishlistClicked={()=>{dispatch(addToWishlist(product))}}
                                    //              onAddToCartClicked={()=>{dispatch(addToCart(product, 1))}} key={index} />
                                                 <PostItem post={post} key={index}/>)
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