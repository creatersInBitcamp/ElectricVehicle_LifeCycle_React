import React from 'react'
import Breadcrumb from '../common/breadcrumb';
import data from '../../assets/data/listMenu';
import Datatable from '../common/datatable'

const List_menu = () => {
        return (
            <>
                <Breadcrumb title="List Menu" parent="Menu" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Menu Lists</h5>
                                </div>
                                <div className="card-body">
                                    <div id="batchDelete" className="category-table order-table coupon-list-delete">
                                    <Datatable
                                            multiSelectOption={true}
                                            myData={data}
                                            pageSize={6}
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

export default List_menu
