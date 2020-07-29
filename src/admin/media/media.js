import React from 'react'
import Breadcrumb from '../common/breadcrumb';
import Datatable from '../common/datatable'
import data from '../../assets/data/media';

const Media = () => {
        return (
            <>
                <Breadcrumb title="커뮤니티" parent="Media" />
                <div className="container-fluid bulk-cate">
                    <div className="card">
                        <div className="card-header">
                            <h5>Media File List</h5>
                        </div>
                        <div className="card-body">
                            <div id="batchDelete" className="category-table media-table coupon-list-delete">
                                <Datatable
                                    multiSelectOption={true}
                                    myData={data}
                                    pageSize={10}
                                    pagination={true}
                                    class="-striped -highlight"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default Media
