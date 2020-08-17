import React, {useEffect, useState} from 'react'
import {AdminBreadcrumb} from '../common';
import Modal from 'react-responsive-modal';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import {Table} from '../item'

const elecCarTypes = {REQUEST: 'elecCar/REQUEST'}
const initialState = {
}
const elecCarReducer = ( state=initialState, action ) => {
    switch (action.type) {
        case elecCarTypes.REQUEST: return {...state, payload: action.payload}
        default: return state
    }
}

export const ElecCar = () => {

    const [open, setOpen] = useState(false)
    const [data, setDate] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8080/electriccars/getall`)
            .then((res)=>{
                setDate(res.data)
            })
    },[])

    const columns = [
        {
            title:'자동차명', field:'carName'
        },
        {
            title:'브랜드', field:'brand'
        },
        {
            title:'가격(만원)', field:'price'
        },
        {
            title:'급속충전', field:'boostingCharge'
        },
        {
            title:'에너지효율', field: 'fuelEfficiency'
        }
    ]

    const onOpenModal = () => {
        setOpen(true)
    };

    const onCloseModal = () => {
        setOpen(false)
    };
        return (
            <>
                <AdminBreadcrumb title="전기차" parent="Physical" />
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
                                        <button type="button" className="btn btn-primary" onClick={onOpenModal} data-toggle="modal" data-original-title="test" data-target="#exampleModal">전기차 추가</button>
                                        <Modal open={open} onClose={onCloseModal} >
                                            <div className="modal-header">
                                                <h5 className="modal-title f-w-600" id="exampleModalLabel2">전기차 리스트 추가</h5>
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
                                    <div className="clearfix"/>
                                    <div id="basicScenario" className="product-physical">
                                        <Table title={"전기 자동차"} columns={columns} data={data}/>
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

export default elecCarReducer

