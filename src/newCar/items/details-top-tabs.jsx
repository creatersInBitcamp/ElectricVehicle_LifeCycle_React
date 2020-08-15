import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import {Link} from 'react-router-dom'

export const DetailsTopTabs = item => {
    return (
        <section className="tab-product m-0">
            <div className="row">
                <div className="col-sm-12 col-lg-12">
                    <Tabs className="tab-content nav-material">
                        <TabList className="nav nav-tabs nav-material">
                            <Tab className="nav-item">
                                    <span className="nav-link active">
                                        <i className="icofont icofont-ui-home"/>Description</span>
                                <div className="material-border"/>
                            </Tab>
                            <Tab className="nav-item">
                                <span className="nav-link" ><i className="icofont icofont-man-in-glasses"/>Details</span>
                                <div className="material-border"/>
                            </Tab>
                            <Tab className="nav-item">
                                    <span className="nav-link" >
                                        <i className="icofont icofont-contacts"/>Video</span>
                                <div className="material-border"/>
                            </Tab>
                        </TabList>
                        <TabPanel className="tab-pane fade mt-4 show active">
                            <table className="table table-striped mb-0">
                                <tbody>
                                <tr>
                                    <th>passengersNumber :</th>
                                    <td><h5>{item.passengerNumber}</h5></td>
                                </tr>
                                <tr>
                                    <th>drivingMethod :</th>
                                    <td>{item.drivingMethod}</td>
                                </tr>
                                <tr>
                                    <th>transmission :</th>
                                    <td>{item.transmission}</td>
                                </tr>
                                <tr>
                                    <th>distanceDriven :</th>
                                    <td>{item.distanceDriven}</td>
                                </tr>
                                <tr>
                                    <th>energy :</th>
                                    <td>{item.energy}</td>
                                </tr>
                                <tr>
                                    <th>maximumOutput :</th>
                                    <td>{item.maximumOutput}</td>
                                </tr>
                                <tr>
                                    <th>maximumTorque :</th>
                                    <td>{item.maximumTorque}</td>
                                </tr>
                                <tr>
                                    <th>accelerationPerformance :</th>
                                    <td>{item.accelerationPerformance}</td>
                                </tr>
                                <tr>
                                    <th>length :</th>
                                    <td>{item.length}</td>
                                </tr>
                                <tr>
                                    <th>width :</th>
                                    <td>{item.width}</td>
                                </tr>
                                <tr>
                                    <th>height :</th>
                                    <td>{item.height}</td>
                                </tr>
                                <tr>
                                    <th>wheelBase :</th>
                                    <td>{item.wheelBase}</td>
                                </tr>
                                <tr>
                                    <th>frontDistance :</th>
                                    <td>{item.frontDistance}</td>
                                </tr>
                                <tr>
                                    <th>backDistance :</th>
                                    <td>{item.backDistance}</td>
                                </tr>
                                <tr>
                                    <th>weight :</th>
                                    <td>{item.weight}</td>
                                </tr>
                                <tr>
                                    <th>frontWheel :</th>
                                    <td>{item.frontWheel}</td>
                                </tr>
                                <tr>
                                    <th>rearWheel :</th>
                                    <td>{item.rearWheel}</td>
                                </tr>
                                <tr>
                                    <th>frontSuspension :</th>
                                    <td>{item.frontSuspension}</td>
                                </tr>
                                <tr>
                                    <th>rearSuspension :</th>
                                    <td>{item.rearSuspension}</td>
                                </tr>
                                <tr>
                                    <th>frontBraking :</th>
                                    <td>{item.frontBraking}</td>
                                </tr>
                                <tr>
                                    <th>rearBraking :</th>
                                    <td>{item.rearBraking}</td>
                                </tr>
                                <tr>
                                    <th>steering :</th>
                                    <td>{item.steering}</td>
                                </tr>
                                <tr>
                                    <th>boostingCharge :</th>
                                    <td>{item.boostingCharge}</td>
                                </tr>
                                <tr>
                                    <th>slowCharging :</th>
                                    <td>{item.slowCharging}</td>
                                </tr>
                                </tbody>
                            </table>
                        </TabPanel>
                        <TabPanel>
                            <p className="mt-4 p-0">
                                {item.shortDetails}
                            </p>
                        </TabPanel>
                        <TabPanel>
                            <div className="mt-4 text-center">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe
                                            src={item.video}
                                        allow="autoplay; encrypted-media"
                                        allowFullScreen/>
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}

export default DetailsTopTabs;