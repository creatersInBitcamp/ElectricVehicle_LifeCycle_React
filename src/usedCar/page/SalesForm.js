import React, {useState} from "react";
import {Breadcrumb} from "../../common";
import {useSelector} from "react-redux";
import axios from "axios";
import {MarketPrice} from "..";

const sessionUser = JSON.parse(sessionStorage.getItem('user'))

export const SalesForm = (props) => {
    const [user] = useState(sessionUser)
    const [targetId,setTargetId] = useState(0)
    const [item,setItem] = useState([])
    const [desiredPrice, setDesiredPrice] = useState('')
    const [yy, setYy] = useState('')
    const [mm, setMm] = useState('')
    const [mileage, setMileage] = useState('')
    const [carId,setCarId] = useState(0)
    const [carName,setCarName] = useState('')
    const [submitted,setSubmitted] = useState(false)

    const {products} = useSelector(state=>({
        products: state.data.products
    }))


    const onClickSelect = (e) => {
        e.preventDefault()
        if (targetId == 0) {
            e.preventDefault()
            alert('차종을 선택하세요.')
            setCarId(0)
            setCarName('')
        } else {
            let product = products.find(x => x.eccarId == targetId)
            setItem(product)
            setCarId(targetId)
            setCarName(product.carName)
        }

    }
    const onClickSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        if(desiredPrice && mm && yy && mileage && carId) {
            const info = {
                price: desiredPrice,
                age: yy.concat("/",mm,"식"),
                mileage: mileage,
                sale: true,
                eccarId: carId,
                userSeq: user.userSeq
            }
            axios.post(`http://localhost:8080/usedCars/register`, info)
                .then(res => {
                    res.data ? props.history.push(`${process.env.PUBLIC_URL}/`) : alert('등록 실패')
                })
                .catch(()=>{
                    alert('통신실패')
                })
        } else {
            alert('차종을 선택해주세요.')
        }
    }

    return <>
        <Breadcrumb title={'Selling Used Car'}/>
        <section className="register-page section-b-space">
            <div className="container">
                <div>
                    <div className="col-lg-12">
                        <h3>내 차 팔기</h3>
                        <div className="theme-card">
                            <form className="theme-form">
                                <div className="form-row">
                                    <div className="col">
                                        <label htmlFor="car-type">차종</label>
                                        <select onChange={(e)=>setTargetId(e.target.value)}>
                                            <option value={0}>차종을 선택해주세요.</option>
                                            {
                                                products.map((item,index)=>{
                                                    return <option key={index} value={item.eccarId}>{item.carName}</option>
                                                })
                                            }
                                        </select>&nbsp;
                                        <button className="btn btn-solid" onClick={onClickSelect}>선택</button>
                                        {
                                            submitted && !carId &&
                                            <div style={{color:"red"}}>선택 필수입니다.</div>
                                        }
                                    </div>
                                    <div className="col">
                                        <label htmlFor="car-type">차종</label>
                                        <h3>{carName}</h3>
                                    </div>
                                </div>
                                <br/><br/>
                                <div className="form-row">
                                    <div className="col-md-6">
                                        <label htmlFor="review">희망가격(단위: 만원)</label>
                                        <input type="text"
                                               className="form-control"
                                               placeholder="Desired Price"
                                               required="required"
                                               onChange={(e) => { setDesiredPrice(e.target.value) }} />
                                        {
                                            submitted && !desiredPrice &&
                                            <div style={{color:"red"}}>입력 필수입니다.</div>
                                        }
                                    </div>
                                    <div className="col">
                                        <h5>현재 판매되고 있는 동일한 차량의 시세입니다.</h5>
                                        <MarketPrice product={carName}/>
                                    </div>
                                </div>
                                <br/><br/>
                                <div className="form-row">
                                    <div className="col-md-6">
                                        <label htmlFor="email">등록연월</label>
                                        <div className="row">
                                            <input type="text"
                                                   className="form-control col-6"
                                                   placeholder="YY"
                                                   required="required"
                                                   onChange={(e) => { setYy(e.target.value) }} />
                                            <input type="text"
                                                   className="form-control col-6"
                                                   placeholder="MM"
                                                   required="required"
                                                   onChange={(e) => { setMm(e.target.value) }} />
                                            {
                                                submitted && !yy && !mm &&
                                                <div style={{color:"red"}}>입력 필수입니다.</div>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <br/><br/>
                                <div className="form-row">
                                    <div className="col-md-6">
                                        <label htmlFor="review">주행거리</label>
                                        <input type="text"
                                               className="form-control"
                                               placeholder="Mileage"
                                               required="required"
                                               onChange={(e) => { setMileage(e.target.value) }} />
                                        {
                                            submitted && !mileage &&
                                            <div style={{color:"red"}}>입력 필수입니다.</div>
                                        }
                                    </div>
                                </div>
                                <br/>
                                <button className="btn btn-solid" onClick={onClickSubmit}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}