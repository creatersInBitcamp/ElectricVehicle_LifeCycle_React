import React, {useEffect, useState} from "react";
import axios from "axios";
import {BACK_PATH} from "../../api/key";
import {useSelector} from "react-redux";
import {useRouteMatch} from "react-router-dom";

const updateDetail = (props) => {
    const [contents,setContents] = useState([])
    const [targetId,setTargetId] = useState(0)
    const [desiredPrice, setDesiredPrice] = useState('')
    const [age, setAge] = useState('')
    const [mileage, setMileage] = useState('')
    const [carId,setCarId] = useState(0)
    const [carName,setCarName] = useState('')

    const {products} = useSelector(state=>({
        products: state.data.products
    }))

    const match = useRouteMatch('/used-car/product/update/:usedCarId')
    let usedCarId = match.params.usedCarId

    useEffect(()=>{
        axios.get(`http://${BACK_PATH}/usedCars/getOne/${usedCarId}`)
            .then(res=>{
                res.data ? setContents(res.data) : props.history.push(`${process.env.PUBLIC_URL}/used-car/collection`)
                console.log(res.data)
            })
            .catch(()=>{
                alert('통신실패')
            })
    },[])

    const onClickSelect = (e) => {
        e.preventDefault()

        if (targetId == 0) {
            e.preventDefault()
            alert('차종을 선택하세요.')
            setCarId(0)
            setCarName('')
        } else {
            let product = products.find(x => x.eccarId == targetId)
            setCarId(targetId)
            setCarName(product.carName)
            console.log(product)
        }

    }

    const onClickSubmit = (e) => {
        e.preventDefault()
        if (carId !== 0) {
            const info = {
                usedCarId: usedCarId,
                eccarId: carId,
                age: age ? age : contents.age,
                price: desiredPrice ? desiredPrice : contents.price,
                mileage: mileage ? mileage : contents.mileage,
                sale: true,
                main: false
            }
            axios.post(`http://${BACK_PATH}/usedCars/update`,info)
                .then(alert('수정이 완료되었습니다.'), props.history.push(`${process.env.PUBLIC_URL}/used-car/collection`))
                .catch(()=>{
                    alert('통신실패')
                })
        } else {
            alert('차종을 선택해주세요.')
        }

    }

    return <>
        <section className="register-page section-b-space">
            <div className="container">
                <div className="col-lg-12">
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
                                           required="required"
                                           defaultValue={contents.price}
                                           onChange={(e) => { setDesiredPrice(e.target.value) }} />
                                </div>
                            </div>
                            <br/><br/>
                            <div className="form-row">
                                <div className="col-md-6">
                                    <label htmlFor="email">등록연월</label>
                                        <input type="text"
                                               className="form-control"
                                               required="required"
                                               defaultValue={contents.age}
                                               onChange={(e) => { setAge(e.target.value) }} />

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
                                           defaultValue={contents.mileage}
                                           onChange={(e) => { setMileage(e.target.value) }} />
                                </div>
                            </div>
                            <br/>
                            <button className="btn btn-solid" onClick={onClickSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
}
export default updateDetail