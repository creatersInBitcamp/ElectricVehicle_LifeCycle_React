import React, {useEffect, useState} from 'react'
import {AdminBreadcrumb} from '../common';
import Modal from 'react-responsive-modal';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import {Table} from '../item'
import http from "../item/http";

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
    const [files, setFile] = useState(undefined)

    useEffect(()=>{
        axios.get('http://localhost:8080/electriccars/getall')
            .then((res)=>{
                setDate(res.data)
            })
            .catch((err)=>{
                console.log(err.status)
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

    const addFile = (e) => {
        setFile(e.target.files[0])
    }
    const uploadService = (files) => {
        let formData = new FormData();
        formData.append("file", files)
        return http.post("/electriccars/uploadFile", formData, {})
    }

    const saveFile = (e) => {
        e.preventDefault()
        uploadService(files)
            .then((res) => {
                axios.get('http://localhost:8080/electriccars/getall')
                    .then((res)=>{
                        setDate(res.data)
                    })
                    .catch((err)=>{
                        console.log(err.status)
                    })
            })
            .catch((err)=>{
                throw err
            })
        setOpen(false)
    }

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
                                    <h3>전기차 DB수: {data.length}</h3>
                                    <div className="btn-popup pull-right">
                                        <button type="button" className="btn btn-primary" onClick={onOpenModal} data-toggle="modal" data-original-title="test" data-target="#exampleModal">전기차 추가</button>
                                        <Modal open={open} onClose={onCloseModal} >
                                            <div className="modal-header">
                                                <h5 className="modal-title f-w-600" id="exampleModalLabel2">전기차 리스트 추가</h5>
                                            </div>
                                            <div className="modal-body">
                                                <form>
                                                    <div className="form-group">
                                                        <label htmlFor="message-text" className="col-form-label">CSV 파일 :</label>
                                                        <input className="form-control" id="validationCustom02" type="file" onChange={addFile} />
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-primary" onClick={saveFile}>Save</button>
                                                <button type="button" className="btn btn-secondary" onClick={() => onCloseModal('VaryingMdo')}>Close</button>
                                            </div>
                                        </Modal>
                                    </div>
                                    <div className="clearfix"/>
                                    <div id="basicScenario" className="product-physical">
                                        <Table title={"전기 자동차"} columns={columns} data={data} />
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

