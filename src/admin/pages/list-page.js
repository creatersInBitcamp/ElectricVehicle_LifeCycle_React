import React from 'react'
import Breadcrumb from '../common/breadcrumb'
import data from '../../assets/data/listPages';
import Datatable from '../common/datatable';

const ListPages = () => {
        return (
            <>
                <Breadcrumb title="중고차 현황" parent="Pages" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>중고차 관리</h5>
                                </div>
                                <div className="card-body">
                                    <div id="batchDelete" className="category-table order-table coupon-list-delete">
                                        <Datatable
                                            multiSelectOption={true}
                                            myData={data}
                                            pageSize={7}
                                            pagination={false}
                                            class="-striped -highlight"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default ListPages
