import React, {useEffect, useState} from "react";
import {Link, Redirect } from 'react-router-dom'
import Modal from 'react-responsive-modal';
import {MyCarComparison} from "../usedCompare";
import {useDispatch, useSelector} from "react-redux";
import {addToUsedCompare} from "../usedCompare/usedcompareReducer";

const MyCar = props => {
    const [redirect,setRedirect] = useState(false)
    const [targetId,setTargetId] = useState(0)
    const {items} = useSelector(state=>({
        items: state.usedwishlist.list
    }))

    const [open,setOpen] = useState(false)

    const onOpenModal = () => {

        setOpen(true)
    }
    const onCloseModal = () => {
        setOpen(false)
    }

    const handleSubmit = e => {
        // alert('value: ' + value)
        // e.preventDefault()
    }
    const handleChange = e => {
        // alert('value: ' + value)
        console.log(e.target.value)
        setTargetId(e.target.value)
    }
    const onClickSubmit = e => {
        console.log(e.target.value)
        if(e.target.value !== 'default'){
            dispatch(addToUsedCompare(e.target.value))

        }
        return <Link to={`${process.env.PUBLIC_URL}/used-car/comparison/${e.target.value}`}/>
    }
    const onClickRedirect = () => {
        setRedirect(true)
    }
    const renderRedirect = e => {
        if(redirect===true){
            dispatch(addToUsedCompare(targetId))
            return <Link to={`${process.env.PUBLIC_URL}/used-car/comparison/${targetId}`} />
        }
    }

    const dispatch = useDispatch()


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
                                            <select onChange={handleChange}>
                                                <option value="default">상품을 선택해주세요.</option>
                                                {
                                                    items.map((item,index)=>{
                                                        return <option key={index} value={item.id}>{item.name}</option>
                                                    })
                                                }
                                            </select>
                                            <div className="product-buttons">
                                                {renderRedirect()}
                                                <button className="btn btn-solid"
                                                        onClick={onClickRedirect}>
                                                    비교하기
                                                </button>
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