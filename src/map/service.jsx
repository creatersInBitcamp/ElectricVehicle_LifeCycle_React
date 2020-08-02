import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ChargingStationMap from "./charging-station-map";
import Breadcrumb from "../common/breadcrumb";
import SightsMap from "./sights-map"
import BookmarkMap from "./bookmark-map";
import Transactions_sales from "./table-charging-station";

const MapService = () => {
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

export default MapService

