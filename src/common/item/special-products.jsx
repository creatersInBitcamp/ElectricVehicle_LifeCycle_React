import React, {useEffect, useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {useDispatch, useSelector} from 'react-redux'
import {getBestSeller, getSpecialUsed} from '../../atomic/services/services'
import {ProductItem}from '../../usedCar'
import {PostItem} from '../../board'
import {addToCompare,addToWishlist,addToCart,ProductListItem} from '../../newCar'
import {addToUsedWishlist} from "../../usedCar/page/UsedCarWishlist";
import axios from "axios";
import {BACK_PATH} from "../../api/key";

export const SpecialProducts = props => {
    const {elecCar,usedCar,symbol} = useSelector(state=>({
        elecCar: getBestSeller(state.data.products),
        usedCar: getSpecialUsed(state.usedData.products),
        symbol: state.data.symbol
    }))


    useEffect(()=>{
        axios.get(`http://${BACK_PATH}/posts/getall`)
            .then((res)=>{
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
                                { elecCar.map((product, index ) =>
                                    <ProductListItem product={product} symbol={symbol}
                                                 onAddToCompareClicked={()=>{dispatch(addToCompare(product))}}
                                                 onAddToWishlistClicked={()=>{dispatch(addToWishlist(product))}}
                                                 onAddToCartClicked={()=>{dispatch(addToCart(product))}} key={index} check={false}/> )
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