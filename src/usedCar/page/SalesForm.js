import React, {useState} from "react";
import {Breadcrumb} from "../../common";
import {useSelector} from "react-redux";
import axios from "axios";

const user = JSON.parse(sessionStorage.getItem('user'))

export const SalesForm = (props) => {
    const [targetId,setTargetId] = useState(0)
    const [item,setItem] = useState([])
    const [userName, setUserName] = useState('')
    const [carNumber, setCarNumber] = useState('')
    const [carColor, setCarColor] = useState('')
    const [desiredPrice, setDesiredPrice] = useState('')
    const [yy, setYy] = useState('')
    const [mm, setMm] = useState('')
    const [mileage, setMileage] = useState('')
    const [carId,setCarId] = useState(0)
    const [carName,setCarName] = useState('')

    const {products} = useSelector(state=>({
        products: state.data.products
    }))

    const onClickSubmit = (e) => {
        e.preventDefault()
        console.log(typeof item)
        const info = {
            price: desiredPrice,
            age: yy.concat("/",mm,"식"),
            mileage: mileage,
            electricCar: {eccarId: item},
            user: {userSeq: user}
        }
        console.log(info)
        axios.post(`http://localhost:8080/usedCars/register`, info)
            .then(res => {
                res.data ? props.history.push(`${process.env.PUBLIC_URL}/`) : alert('등록 실패')
            })
            .catch(()=>{
                alert('통신실패')
            })
    }
    const onClickSelect = (e) => {
        e.preventDefault()
        let product = products.find(x => x.eccarId == targetId)
        setItem(product)
        setCarId(targetId)
        setCarName(product.carName)
        console.log(typeof product)
        console.log(product)
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
                                <div className="row">

                                    <div className="col">
                                        <label htmlFor="car-type">차종</label>
                                        <select onChange={(e)=>setTargetId(e.target.value)}>
                                            <option value="default">차종을 선택해주세요.</option>
                                            {
                                                products.map((item,index)=>{
                                                    return <option key={index} value={item.eccarId}>{item.carName}</option>
                                                })
                                            }
                                        </select>
                                        <button onClick={onClickSelect}>선택</button>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="car-type">차종</label>
                                        <h3>{carName}</h3>
                                    </div>
                                </div>



                                    <div className="row">
                                    <div className="col">
                                        <label htmlFor="review">소유주</label>
                                        <input type="text"
                                               className="form-control"
                                               placeholder="Owner's Name"
                                               required=""
                                               value={userName}
                                               onChange={(e) => { setUserName(e.target.value) }}/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="email">차량번호</label>
                                        <input type="text"
                                               className="form-control"
                                               placeholder="Car Number"
                                               required=""
                                               value={carNumber}
                                               onChange={(e) => { setCarNumber(e.target.value) }} />
                                    </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="email">차량색상</label>
                                            <input type="text"
                                                   className="form-control"
                                                   placeholder="Car Color"
                                                   required=""
                                                   value={carColor}
                                                   onChange={(e) => { setCarColor(e.target.value) }} />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="review">희망가격</label>
                                            <input type="text"
                                                   className="form-control"
                                                   placeholder="Desired Price"
                                                   required=""
                                                   value={desiredPrice}
                                                   onChange={(e) => { setDesiredPrice(e.target.value) }} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="email">등록연월</label>
                                            <div className="row">
                                                <input type="text"
                                                       className="form-control col-6"
                                                       placeholder="YY"
                                                       required=""
                                                       value={yy}
                                                       onChange={(e) => { setYy(e.target.value) }} />
                                                <input type="text"
                                                       className="form-control col-6"
                                                       placeholder="MM"
                                                       required=""
                                                       value={mm}
                                                       onChange={(e) => { setMm(e.target.value) }} />
                                            </div>

                                        </div>
                                        <div className="col">
                                            <label htmlFor="review">주행거리</label>
                                            <input type="text"
                                                   className="form-control"
                                                   placeholder="Mileage"
                                                   required=""
                                                   value={mileage}
                                                   onChange={(e) => { setMileage(e.target.value) }} />
                                        </div>
                                    </div>




                                <div className="form-row">
                                    <textarea className={"form-control"} rows={5}/>
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