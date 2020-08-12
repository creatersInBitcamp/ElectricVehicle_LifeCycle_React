import React from 'react';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import {User,Settings} from 'react-feather'

const tabset_profileTypes = {REQUEST: 'tabset_profile/REQUEST'}
const tabset_profileReducer = ( state={}, action ) => {
    switch (action.type) {
        case tabset_profileTypes.REQUEST: return {...state, payload: action.payload}
        default: return state
    }
}

export const Tabset_profile = () => {
        return (
            <div>
                <Tabs>
                    <TabList className="nav nav-tabs tab-coupon" >
                        <Tab className="nav-link"><User className="mr-2" />내정보</Tab>
                        <Tab className="nav-link"><Settings className="mr-2" />정보수정</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="tab-pane fade show active">
                            <h5 className="f-w-600 f-16">마이페이지</h5>
                            <div className="table-responsive profile-table">
                                <table className="table table-responsive">
                                    <tbody>
                                        <tr>
                                            <td>이름</td>
                                            <td>John</td>
                                        </tr>
                                        <tr>
                                            <td>이메일</td>
                                            <td>johndeo@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td>성별</td>
                                            <td>Male</td>
                                        </tr>
                                        <tr>
                                            <td>전화번호</td>
                                            <td>2124821463</td>
                                        </tr>
                                        <tr>
                                            <td>생년월일</td>
                                            <td>Dec, 15 1993</td>
                                        </tr>
                                        <tr>
                                            <td>주소</td>
                                            <td>USA</td>
                                        </tr>
                                        <button>비밀번호 변경</button>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        {/* <div className="tab-pane fade"> */}
                            <div className="account-setting">
                                
                                <h5 className="f-w-600 f-16">Notifications</h5>
                                <div className="row">
                                    <div className="col">
                                        <label className="d-block" >
                                            <input className="checkbox_animated" id="chk-ani" type="checkbox" defaultChecked />
                                            Allow Desktop Notifications
                                                    </label>
                                        <label className="d-block">
                                            <input className="checkbox_animated" id="chk-ani1" type="checkbox" />
                                            Enable Notifications
                                                    </label>
                                        <label className="d-block">
                                            <input className="checkbox_animated" id="chk-ani2" type="checkbox" />
                                            Get notification for my own activity
                                                    </label>
                                        <label className="d-block mb-0" >
                                            <input className="checkbox_animated" id="chk-ani3" type="checkbox" defaultChecked />
                                            DND
                                                    </label>
                                    </div>
                                </div>
                            </div>
                            <div className="account-setting deactivate-account">
                                <h5 className="f-w-600 f-16">Deactivate Account</h5>
                                <div className="row">
                                    <div className="col">
                                        <label className="d-block" >
                                            <input className="radio_animated" id="edo-ani" type="radio" name="rdo-ani" defaultChecked />
                                            I have a privacy concern
                                                    </label>
                                        <label className="d-block" >
                                            <input className="radio_animated" id="edo-ani1" type="radio" name="rdo-ani" />
                                            This is temporary
                                                    </label>
                                        <label className="d-block mb-0" >
                                            <input className="radio_animated" id="edo-ani2" type="radio" name="rdo-ani" defaultChecked />
                                            Other
                                                    </label>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-primary">Deactivate Account</button>
                            </div>
                            <div className="account-setting deactivate-account">
                                <h5 className="f-w-600 f-16">Delete Account</h5>
                                <div className="row">
                                    <div className="col">
                                        <label className="d-block" >
                                            <input className="radio_animated" id="edo-ani3" type="radio" name="rdo-ani1" defaultChecked />
                                            No longer usable
                                                    </label>
                                        <label className="d-block">
                                            <input className="radio_animated" id="edo-ani4" type="radio" name="rdo-ani1" />
                                            Want to switch on other account
                                                    </label>
                                        <label className="d-block mb-0">
                                            <input className="radio_animated" id="edo-ani5" type="radio" name="rdo-ani1" defaultChecked />
                                            Other
                                                    </label>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-primary">Delete Account</button>
                            </div>
                        {/* </div> */}
                    </TabPanel>
                </Tabs>
            </div>
        )
}

export default tabset_profileReducer
