import React, {Component, Fragment, useState} from 'react'
import Breadcrumb from '../../common/breadcrumb';
import Modal from 'react-responsive-modal';
import 'react-toastify/dist/ReactToastify.css';
import data from '../../../assets/data/category';
import Datatable from '../../common/datatable';
import SearchHeader from "../../common/header_components/searchHeader";

const Category = () => {
    const [open, setOpen] = useState(false)

    const onOpenModal = () => {
        setOpen(true)
    };

    const onCloseModal = () => {
        setOpen(false)
    };
        return (
            <>
                <Breadcrumb title="전기차" parent="Physical" />
                {/* <!-- Container-fluid starts--> */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>전기차 종합관리</h5>
                                </div>
                                <div className="card-body">
                                    <div className="btn-popup pull-right">
                                        <SearchHeader/>
                                        <button type="button" className="btn btn-primary" onClick={onOpenModal} data-toggle="modal" data-original-title="test" data-target="#exampleModal">Add Category</button>
                                        <Modal open={open} onClose={onCloseModal} >
                                            <div className="modal-header">
                                                <h5 className="modal-title f-w-600" id="exampleModalLabel2">Add Physical Product</h5>
                                            </div>
                                            <div className="modal-body">
                                                <form>
                                                    <div className="form-group">
                                                        <label htmlFor="recipient-name" className="col-form-label" >Category Name :</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="message-text" className="col-form-label">Category Image :</label>
                                                        <input className="form-control" id="validationCustom02" type="file" />
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-primary" onClick={() => onCloseModal('VaryingMdo')}>Save</button>
                                                <button type="button" className="btn btn-secondary" onClick={() => onCloseModal('VaryingMdo')}>Close</button>
                                            </div>
                                        </Modal>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div id="basicScenario" className="product-physical">
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
                </div>
                {/* <!-- Container-fluid Ends--> */}
            </>
        )

}

export default Category

