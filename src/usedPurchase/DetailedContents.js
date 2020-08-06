import React from "react";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import MarketPrice from "./MarketPrice";
import {MDBTable, MDBTableBody, MDBTableHead} from "mdbreact";

const DetailedContents = () => {
    return <>
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
                                        <i className="icofont icofont-contacts"/>Chart</span>
                                <div className="material-border"/>
                            </Tab>
                            <Tab className="nav-item">
                                    <span className="nav-link" >
                                        <i className="icofont icofont-contacts"/>Write Comments</span>
                                <div className="material-border"/>
                            </Tab>
                        </TabList>
                        <TabPanel className="tab-pane fade mt-4 show active">
                            <table className="table table-striped mb-0">
                                <tbody>
                                <tr>
                                    <th>Ideal For :</th>
                                    <td>Women's</td>
                                </tr>
                                <tr>
                                    <th>Pattern :</th>
                                    <td>Embroidered</td>
                                </tr>
                                <tr>
                                    <th>Dress Fabric :</th>
                                    <td>Silk</td>
                                </tr>
                                <tr>
                                    <th>Type :</th>
                                    <td>Ghagra, Choli, Dupatta Set</td>
                                </tr>
                                <tr>
                                    <th>Neck :</th>
                                    <td>Round Neck</td>
                                </tr>
                                <tr>
                                    <th>Sleeve :</th>
                                    <td>3/4 Sleeve</td>
                                </tr>
                                <tr>
                                    <th>Work :</th>
                                    <td>N/A</td>
                                </tr>
                                </tbody>
                            </table>
                        </TabPanel>
                        <TabPanel>
                            <p className="mt-4 p-0">
                                판매자의 말
                            </p>
                        </TabPanel>
                        <TabPanel>
                            <div className="mt-4 text-center">
                                <MarketPrice/>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            {/* 댓글 리스트 */}
                            <MDBTable>
                                <MDBTableHead>
                                    <tr>
                                        <th>#</th>
                                        <th rowSpan={5}>댓글</th>
                                        <th>글쓴이</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    <td>1</td>
                                    <td rowSpan={5}>test</td>
                                    <td>김수빈</td>
                                </MDBTableBody>
                            </MDBTable>
                            {/* 댓글 쓰기 */}
                            <form className="theme-form mt-4">
                                <div className="form-row">
                                    <h6>궁금한 점이 있다면 물어보세요!</h6>
                                    <div className="col-md-12">
                                        <textarea className="form-control" placeholder="Wrire Your Question Here" id="exampleFormControlTextarea1" rows="6"/>
                                    </div>
                                    <div className="col-md-12">
                                        <button className="btn btn-solid" type="submit">Submit YOur DetailContents</button>
                                    </div>
                                </div>
                            </form>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </section>
    </>
}
export default DetailedContents