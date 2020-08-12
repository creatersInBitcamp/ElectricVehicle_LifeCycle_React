import React, {useEffect, useState} from "react";
import {Link, Redirect} from 'react-router-dom'
import Modal from 'react-responsive-modal';
import {useDispatch, useSelector} from "react-redux";
import {addToUsedCompare} from '../page/MyCarComparison'

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
                        <button onClick={()=>setOpen(true)} className="btn btn-solid">비교하기</button>
                    </div>
                </div>
                :
                <div className="collection-filter-block">
                    <h2 style={{textAlign: "center", padding: "15px"}}>My Car</h2>
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
                                        {myCar.map((item) => {
                                            return (
                                                <>
                                                    <h2 style={{textAlign: "center"}}>{item.name}</h2>
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



        
    </>
}
export default MyCar