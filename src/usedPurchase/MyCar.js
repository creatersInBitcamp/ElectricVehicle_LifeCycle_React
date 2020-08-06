import React, {useState} from "react";
import { Redirect } from 'react-router-dom'
import Modal from 'react-responsive-modal';
import {useDispatch, useSelector} from "react-redux";
import {addToUsedCompare} from "../usedCompare/usedcompareReducer";

const MyCar = () => {

    const [open,setOpen] = useState(false)
    const [redirect,setRedirect] = useState(false)
    const [targetId,setTargetId] = useState(0)

    const {items,products} = useSelector(state=>({
        items: state.usedwishlist.list,
        products: state.data.products
    }))

    const renderRedirect = () => {
        if(redirect===true && targetId!==0){
            return <Redirect to={`${process.env.PUBLIC_URL}/used-car/comparison/${targetId}`} />
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
            <button onClick={()=>setOpen(true)} className="btn btn-solid">비교하기</button>
        </div>
        <Modal open={open} onClose={()=>setOpen(false)} center>
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
                                        <form>
                                            <select onChange={e=>setTargetId(e.target.value)}>
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
                                                        type={'button'}
                                                        onClick={()=>{
                                                            setRedirect(true);
                                                            dispatch(addToUsedCompare(products.find(x => x.id == targetId)));
                                                        }}>
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