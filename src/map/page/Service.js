import React, {useEffect, useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {MapChargingStation,MapSights,TableChargingStation,MapBookmark} from "../index";
import {Breadcrumb} from "../../common";
import {AdminBreadcrumb} from "../../admin/common"
import {useSelector} from "react-redux";
import StickyBox from "react-sticky-box";
import {MyCar} from "../../usedCar";
import AdminChargingStationTable from "../items/TableAdmin";

export const Service = () => {
    const [admin,setAdmin] = useState(false);
    const result = useSelector(state=>state.loginReducer)
    const [session, setSession] = useState(false)
    const [check, setCheck] = useState('지도')
    const [userSession] = useState(sessionStorage.getItem("user"))

    useEffect(() => {
        userSession ? setSession(true) : setSession(false)
    },[userSession])

    useEffect(()=>{
        setAdmin(result.check)
    },[result])

    const {first} = useSelector(state=>({
        first: state.firstCar.list
    }))

    return (
        (!admin)?(
                <div>
                    <Breadcrumb title={'Map'}/> <br/>
                    <div className="collection-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-3 collection-filter">
                                    <StickyBox offsetTop={20} offsetBottom={20}>
                                        <MyCar check={check}/>
                                    </StickyBox>
                                </div>
                                <div className="collection-content col">
                                    <div className="page-main-content ">
                                        <div className="">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="collection-product-wrapper">
                                                        <section className="section-b-space p-t-0">
                                                            <div className="container">
                                                                <Tabs className="theme-tab">
                                                                    <TabList className="tabs tab-title">
                                                                        <Tab>충전소 지도</Tab>
                                                                        <Tab>관광지 지도</Tab>
                                                                        <Tab>충전소 검색</Tab>
                                                                        {session?(
                                                                            <Tab>즐겨찾기</Tab>
                                                                        ):null}
                                                                    </TabList>

                                                                    <TabPanel>
                                                                        <div className="no-slider row">
                                                                            <MapChargingStation first={first}/>
                                                                        </div>
                                                                    </TabPanel>
                                                                    <TabPanel>
                                                                        <div className="no-slider row">
                                                                            <MapSights/>
                                                                        </div>
                                                                    </TabPanel>
                                                                    <TabPanel>
                                                                        <div className=" no-slider row">
                                                                            <TableChargingStation/>
                                                                        </div>
                                                                    </TabPanel>
                                                                    <TabPanel>
                                                                        <div className=" no-slider row">
                                                                            <MapBookmark/>
                                                                        </div>
                                                                    </TabPanel>
                                                                </Tabs>
                                                            </div>
                                                        </section>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
            :(
                <div>
                    <AdminBreadcrumb title={'서비스'}/> <br/>
                    <div className="container-fluid bulk-cate">
                        <div className="card">
                            <div className="card-header">
                                <h5>서비스 현황</h5>
                            </div>
                            <div className="card-body">
                                <AdminChargingStationTable/>
                            </div>
                        </div>
                    </div>
                </div>
            )
    )

}

export default Service