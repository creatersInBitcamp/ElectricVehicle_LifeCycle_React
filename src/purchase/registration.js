import React, { Fragment } from 'react';

export const Registration = () => {
        return (
            <Fragment>
                <div className="col-xl-6 xl-100">
                    <div className="card">
                        <div className="card-header">
                            <h5>신차 등록비용 계산기</h5>
                        </div>
                        <div className="card-body">
                            <div className="user-status table-responsive latest-order-table">
                                <table className="table table-bordernone">
                                    <thead>
                                    <tr>
                                        차량가격 : <input type='text'/><th></th>
                                        거주지역 : <select>
                                        <option value="선택">선택</option>
                                        <option value="선택">경기</option>
                                        <option value="선택">서울</option>
                                        <option value="선택">인천</option>
                                        <option value="선택">부천</option>
                                        <option value="선택">목포</option>
                                        <option value="선택">울산</option>
                                    </select>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>경차</td>
                                        <td><input type="checkbox" name="chk_info" value="HTML"/>1000cc 미만</td>

                                    </tr>
                                    <tr>
                                        <td>승용차</td>
                                        <td><input type="checkbox" name="chk_info" value="HTML"/>1000~1500cc 미만</td>
                                        <td><input type="checkbox" name="chk_info" value="HTML"/>1500~1600cc 미만</td>
                                        <td><input type="checkbox" name="chk_info" value="HTML"/>1600~2000cc 미만</td>
                                        <td><input type="checkbox" name="chk_info" value="HTML"/>2000cc 이상</td>
                                        <td><input type="checkbox" name="chk_info" value="HTML"/>다목적형</td>
                                        <td><input type="checkbox" name="chk_info" value="HTML"/>소형(7~10인승)</td>
                                    </tr>
                                    <tr>
                                        <td>승합차</td>
                                        <td><input type="checkbox" name="chk_info" value="HTML"/>소형(11~15인승)</td>
                                        <td><input type="checkbox" name="chk_info" value="HTML"/>중형(16~35인승)</td>
                                        <td><input type="checkbox" name="chk_info" value="HTML"/>대형(36인승이상)</td>

                                    </tr>
                                    <tr>
                                        <td>화물차</td>
                                        <td><input type="checkbox" name="chk_info" value="HTML"/>소형(적재량1톤이하)</td>
                                        <td><input type="checkbox" name="chk_info" value="HTML"/>중형(적재량 1톤 초과 ~ 5톤 미만)</td>
                                        <td><input type="checkbox" name="chk_info" value="HTML"/>대형(적재량 5톤 이상)</td>

                                    </tr>
                                    </tbody>
                                </table>
                                <a href="javascript:void(0)" className="btn btn-primary">View All Orders</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>

        )
}

export default Registration