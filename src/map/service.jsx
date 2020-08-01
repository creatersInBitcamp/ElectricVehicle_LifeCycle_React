import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {connect} from 'react-redux'

import {getBestSeller, getMensWear, getWomensWear} from '../_atomic/services/index'
import {addToCart, addToWishlist, addToCompare} from "../_atomic/actions/index";
import ProductItem from '../layouts/common/product-item';
import ChargingStationMap from "./charging-station-map";
import Breadcrumb from "../common/breadcrumb";
import SightsMap from "./sights-map"
import BookmarkMap from "./bookmark-map";
import Transactions_sales from "./table-charging-station";

class SpecialProducts extends Component {
    render (){

        const {bestSeller,mensWear,womensWear, symbol, addToCart, addToWishlist, addToCompare} = this.props
        return (
            <div>
                <Breadcrumb title={'Map'}/> <br/>
                <section className="section-b-space p-t-0">
                    <div className="container">
                        <Tabs className="theme-tab">
                            <TabList className="tabs tab-title">
                                <Tab>충전소 지도</Tab>
                                <Tab>관광지 지도</Tab>
                                <Tab>충전소 검색</Tab>
                                <Tab>즐겨찾기</Tab>
                            </TabList>

                            <TabPanel>
                                <div className="no-slider row">
                                    <ChargingStationMap/>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="no-slider row">
                                    <SightsMap/>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className=" no-slider row">
                                    <Transactions_sales/>
                                </div>
                            </TabPanel>
                            <TabPanel>
                            <div className=" no-slider row">
                                <BookmarkMap/>
                            </div>
                        </TabPanel>
                        </Tabs>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    bestSeller: getBestSeller(state.data.products),
    mensWear: getMensWear(state.data.products),
    womensWear: getWomensWear(state.data.products),
    symbol: state.data.symbol
})

export default connect(mapStateToProps, {addToCart, addToWishlist, addToCompare}) (SpecialProducts);