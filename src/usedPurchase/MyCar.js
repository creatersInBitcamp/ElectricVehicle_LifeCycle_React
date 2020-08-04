import React, {useState} from "react";
import {Link} from 'react-router-dom'
import Modal from 'react-responsive-modal';
import {MyCarComparison} from "../usedCompare";

const MyCar = () => {
    const [open,setOpen] = useState(false)
    const [image,setImage] = useState('')

    const onOpenModal = () => {
        setOpen(true)
    }
    const onCloseModal = () => {
        setOpen(false)
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
                                        <select>
                                            <option>Choose your option</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                    </div>
                                    <div className="product-buttons">
                                        <button  className="btn btn-solid">비교하기</button>
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