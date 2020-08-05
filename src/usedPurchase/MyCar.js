import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import Modal from 'react-responsive-modal';
import {MyCarComparison} from "../usedCompare";
import {useSelector} from "react-redux";
import {addToUsedCompare} from "../usedCompare/usedcompareReducer";

const MyCar = () => {
    const {items} = useSelector(state=>({
        items: state.usedwishlist.list
    }))

    const [open,setOpen] = useState(false)
    const [image,setImage] = useState('')
    const [value,setValue] = useState([])
    const [item,setItem] = useState([])

    const onOpenModal = () => {
        setOpen(true)
    }
    const onCloseModal = () => {
        setOpen(false)
    }

    const handleSubmit = e => {
        alert('value: ' + value)
        e.preventDefault()
    }
    const handleChange = e => {
        setValue(e.target.value)
        setItem(e.target.value)
        alert('value: ' + value)
    }
    const onClickSubmit = e => {
        e.preventDefault()
        addToUsedCompare(value)
    }


    return <div>
        <div className="collection-filter-block">
            <h3>My Car</h3>
            <img className="img-fluid"
                 src="https://imgauto-phinf.pstatic.net/20200205_218/auto_1580892688565gVui9_PNG/20200205175126_tJ5cbvuq.png?type=f567_410" alt=""/>
            <h3>2019 테슬라 모델3</h3>
            <br/>
            <button onClick={onOpenModal} className="btn btn-solid">비교하기</button>
        </div>
        <Modal open={open} onClose={onCloseModal} center>
            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div className="modal-content quick-view-modal">
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-lg-6  col-xs-12">
                                <div className="quick-view-img">
                                    <h2> 2019 테슬라 모델3 </h2>
                                    <img src="https://imgauto-phinf.pstatic.net/20200205_218/auto_1580892688565gVui9_PNG/20200205175126_tJ5cbvuq.png?type=f567_410"
                                         alt=""
                                         className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-lg-6 rtl-text">
                                <div className="product-right">
                                    <h2>내 차량과 비교하기</h2>
                                    <div className="border-product">
                                        <h6 className="product-title">관심상품</h6>
                                        <form onSubmit={handleSubmit}>
                                            <select value={value} onChange={handleChange}>
                                                <option value={(items[0])}>{items[0].name}</option>
                                            </select>
                                            <div className="product-buttons">
                                                <button className="btn btn-solid"
                                                        type={"submit"}
                                                        value={"Submit"}
                                                        onClick={onClickSubmit}>비교하기</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    </div>
}
export default MyCar