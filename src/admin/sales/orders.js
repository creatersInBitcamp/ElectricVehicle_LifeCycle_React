import React from 'react'
import Breadcrumb from '../common/breadcrumb';
import data from '../../assets/data/orders';
import Datatable from '../common/datatable'

const Orders = () => {
        return (
            <>
                <Breadcrumb title="판매현황" parent="Sales" />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>주문</h5>
                                </div>
                                <div className="card-body order-datatable">
                                <Datatable
                                            multiSelectOption={false}
                                            myData={data}
                                            pageSize={10}
                                            pagination={true}
                                            class="-striped -highlight"
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default Orders
