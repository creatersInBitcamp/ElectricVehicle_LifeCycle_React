import React, {useEffect, useState} from "react";
import {Link, useHistory} from 'react-router-dom'
import Modal from 'react-responsive-modal';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {BACK_PATH} from "../../api/key";
import {addToUsedCompare} from '../page/MyCarComparison'
import {receiveFirstCar} from "../../user/MyCarRegister";

export const MyCar = props => {
    const [open,setOpen] = useState(false)
    const [targetId,setTargetId] = useState(0)
    const [session, setSession] = useState(false)
    const [userSession] = useState(JSON.parse(sessionStorage.getItem("user")))

    const {items,first,wishItems} = useSelector((state) => ({
        items: state.usedData.products,
        first: state.firstCar.list,
        wishItems: state.usedWishlist.list
    }))

    useEffect(() => {
        userSession ? setSession(true) : setSession(false)
        if (userSession) {
            axios.get(`http://${BACK_PATH}/usedCars/getFirstCar/${userSession.userSeq}`)
                .then((res)=>{
                    dispatch(receiveFirstCar(res.data))
                })
        }
    },[userSession])

    const renderRedirect = () => {
        if (targetId !== 0) {
            dispatch(addToUsedCompare(items.find(x => x.usedCarId == targetId)))
            history.push(`${process.env.PUBLIC_URL}/used-car/comparison/${targetId}`)
        } else if (targetId === 0) {

        }
    }

    const onClickLogin = (e) => {
        e.preventDefault()
        history.push(`${process.env.PUBLIC_URL}/pages/login`)
    }
    const onClickRegister = (e) => {
        e.preventDefault()
        history.push(`${process.env.PUBLIC_URL}/pages/profile/mycar`)
    }

    const dispatch = useDispatch()

    const history = useHistory()

    return <>
        {session ?
            (first.length > 0 ?
                <div className="collection-filter-block">
                    <h2 style={{textAlign: "center", padding: "15px"}}>My Car</h2>
                    {first.map((item) => {
                        return (
                            <>
                                <img className="img-fluid" src={item.img.img1} alt=""/>
                                <h5 style={{textAlign: "center"}}>{item.carName}</h5>
                            </>
                        )
                    })}
                    {
                        props.check === '지도'?(
                                <div style={{textAlign: "center", padding: "15px"}}>
                                    <button className="btn btn-solid" onClick={onClickRegister}>
                                        내 차 변경하기
                                    </button>
                                </div>
                        )
                        :(
                            <div style={{textAlign: "center", padding: "15px"}}>
                                <button onClick={()=>setOpen(true)} className="btn btn-solid">비교하기</button>
                            </div>
                        )
                    }
                </div>
                :
                <div className="collection-filter-block">
                    <h2 style={{textAlign: "center", padding: "15px"}}>My Car</h2>
                    <div style={{textAlign: "center", padding: "15px"}}>
                        <button className="btn btn-solid" onClick={onClickRegister}>
                            내 차 등록하기
                        </button>
                    </div>
                </div>
            )
            :
            <div className="collection-filter-block">
                <h2 style={{textAlign: "center", padding: "15px"}}>My Car</h2>
                <div style={{textAlign: "center", padding: "15px"}}>
                    <button className="btn btn-solid" onClick={onClickLogin}>
                        로그인이 필요한 서비스 입니다.
                    </button>
                </div>
            </div>
        }

            <Modal open={open} onClose={()=>setOpen(false)} center>
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content quick-view-modal">
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-6  col-xs-12">
                                    <div className="quick-view-img">
                                        {first.map((item) => {
                                            return (
                                                <>
                                                    <h2 style={{textAlign: "center"}}>{item.carName}</h2>
                                                    <img className="img-fluid" src={item.img.img1} alt=""/>
                                                </>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="col-lg-6 rtl-text">
                                    <div className="product-right">
                                        <h2>내 차량과 비교하기</h2>
                                        <div className="border-product">
                                            <h6 className="product-title">관심상품</h6>
                                            <form>
                                                <select onChange={(e)=>setTargetId(e.target.value)}>
                                                    <option value={0}>상품을 선택해주세요.</option>
                                                    {
                                                        wishItems.map((item,index)=>{
                                                            return <option key={index} value={item.usedCarId}>{item.carName}</option>
                                                        })
                                                    }
                                                </select>
                                                <div className="product-buttons">
                                                    <button className="btn btn-solid"
                                                            type={'button'}
                                                            onClick={()=>renderRedirect()}>
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
    </>
}
export default MyCar