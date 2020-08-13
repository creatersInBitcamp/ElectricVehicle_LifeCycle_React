import React, {useEffect, useState} from "react";
import {Link, Redirect} from 'react-router-dom'
import Modal from 'react-responsive-modal';
import {useDispatch, useSelector} from "react-redux";
import {addToMyCar,removeFromMyCar} from '../index'

export const MyCar = () => {
    const [open,setOpen] = useState(false)
    const [redirect,setRedirect] = useState(false)
    const [targetId,setTargetId] = useState(0)
    const [session, setSession] = useState(false)
    const [userSession] = useState(sessionStorage.getItem("user"))

    useEffect(() => {
        userSession ? setSession(true) : setSession(false)
    },[userSession])

    const {myCar,items,products} = useSelector(state=>({
        myCar: state.myCar.list,
        items: state.usedWishlist.list,
        products: state.data.products
    }))

    const renderRedirect = () => {
        if(redirect===true && targetId!==0){
            return <Redirect to={`${process.env.PUBLIC_URL}/used-car/comparison/${targetId}`} />
        }
    }

    const dispatch = useDispatch()

    return <>

        {session ?
            (myCar.length>0?
                    <div className="collection-filter-block">
                        <h2 style={{textAlign: "center", padding: "15px"}}>My Car</h2>
                        {myCar.map((item) => {
                            return (
                                <>
                                    <img className="img-fluid" src={item.variants?
                                        item.variants[0].images
                                        :item.pictures[0]} alt=""/>
                                    <h5 style={{textAlign: "center"}}>{item.name}</h5>
                                </>
                            )
                        })}
                        <div style={{textAlign: "center", padding: "15px"}}>
                            <button onClick={()=>setOpen(true)} className="btn btn-solid">내 차 변경하기</button>
                        </div>
                    </div>
                    :
                    <div className="collection-filter-block">
                        <h2 style={{textAlign: "center", padding: "15px"}}>My Car</h2>
                        <h4 style={{textAlign: "center", padding: "15px"}}>차량등록이 필요합니다.</h4>
                        <div style={{textAlign: "center", padding: "15px"}}>
                            <button className="btn btn-solid">
                                <Link to={"/pages/myCar"}>
                                    내 차 등록하기
                                </Link>
                            </button>
                        </div>
                    </div>
            )
            :
            <div className="collection-filter-block">
                <h2 style={{textAlign: "center", padding: "15px"}}>My Car</h2>
                <div style={{textAlign: "center", padding: "15px"}}>
                    <button className="btn btn-solid">
                        <Link to={"/pages/login"}>
                            로그인이 필요한 페이지 입니다.
                        </Link>
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
                                    <h2 style={{textAlign: "center"}}>현재 메인차</h2>
                                    {myCar.map((item) => {
                                        return (
                                            <>
                                                <h3 style={{textAlign: "center"}}>{item.name}</h3>
                                                <img className="img-fluid" src={item.variants?
                                                    item.variants[0].images
                                                    :item.pictures[0]} alt=""/>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="col-lg-6 rtl-text">
                                <div className="product-right">
                                    <h2>메인차 변경하기</h2>
                                    <div className="border-product">
                                        <form>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <select onChange={e=>setTargetId(e.target.value)}>
                                                        <option value="default">차종을 선택해주세요.</option>
                                                        {
                                                            products.map((item,index)=>{
                                                                return <option key={index} value={item.id}>{item.name}</option>
                                                            })
                                                        }
                                                    </select>
                                                    <button onClick={()=>dispatch(addToMyCar(products.find(x => x.id == targetId)))}>추가</button>
                                                    <br/>
                                                    <br/>
                                                    <select onChange={e=>setTargetId(e.target.value)}>
                                                        <option value="default">삭제할 차량을 선택해주세요.</option>
                                                        {
                                                            myCar.map((item,index)=>{
                                                                return <option key={index} value={item.id}>{item.name}</option>
                                                            })
                                                        }
                                                    </select>
                                                    <button onClick={()=>dispatch(removeFromMyCar(myCar.find(x => x.id == targetId)))}>삭제</button>
                                                    <br/>
                                                    <br/>
                                                    <select>
                                                        <option value="default">메인차량을 선택해주세요.</option>
                                                        {
                                                            myCar.map((item,index)=>{
                                                                return <option key={index} value={item.id}>{item.name}</option>
                                                            })
                                                        }
                                                    </select>
                                                    <button>선택</button>
                                                </div>
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