import React, {useEffect, useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ChargingStationMap from "./charging-station-map";
import Breadcrumb from "../common/breadcrumb";
import {AdminBreadcrumb} from "../admin/common"
import SightsMap from "./sights-map"
import BookmarkMap from "./bookmark-map";
import TableChargingStation from "./table-charging-station";
import {useSelector} from "react-redux";

const SpecialProducts = () => {
    const [admin,setAdmin] = useState(false);
    const result = useSelector(state=>state.adminCheckReducer)

    useEffect(()=>{
        setAdmin(result.check)
        console.log(result.check)
    },[result])
    if(admin){
        return (
            <div>
                <AdminBreadcrumb title={'서비스'}/> <br/>
                <div className="container-fluid bulk-cate">
                    <div className="card">
                        <div className="card-header">
                            <h5>서비스 현황</h5>
                        </div>
                        <div className="card-body">
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
                                    <TableChargingStation/>
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
                    </div>
                </div>
            </div>
        )
    }else {
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
                                    <TableChargingStation/>
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

export default SpecialProducts

