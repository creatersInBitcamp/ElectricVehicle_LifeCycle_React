import React, {useState} from "react";
import Breadcrumb from "../common/breadcrumb";

export const SalesForm = () => {
    const [userName, setUserName] = useState('')
    const [carNumber, setCarNumber] = useState('')
    const [carColor, setCarColor] = useState('')
    const [desiredPrice, setDesiredPrice] = useState('')
    const [yyyymm, setYyyymm] = useState('')
    const [mileage, setMileage] = useState('')

    const onClickSubmit = e => {
        e.preventDefault()
        alert(`성공`)
    }
    const onClickSearch = e => {

    }
    const onChangeName = e => {
        setUserName(e.target.value)
    }
    const onChangeNumber = e => {
        setCarNumber(e.target.value)
    }
    const onChangeColor = e => {
        setCarColor(e.target.value)
    }
    const onChangePrice = e => {
        setDesiredPrice(e.target.value)
    }
    const onChangeDate = e => {
        setYyyymm(e.target.value)
    }
    const onChangeMileage = e => {
        setMileage(e.target.value)
    }

    return <>
        <div>
            <Breadcrumb title={'Selling Used Car'}/>
                <section className="register-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3>내 차 팔기</h3>
                                <div className="theme-card">
                                    {onClickSearch()?

                                    <form className="theme-form">
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="region">지역</label>
                                                <select>
                                                    <option>Choose your option</option>
                                                    <option value="1">Option 1</option>
                                                    <option value="2">Option 2</option>
                                                    <option value="3">Option 3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="car-type">차종</label>
                                                <select>
                                                    <option>Choose your option</option>
                                                    <option value="1">Option 1</option>
                                                    <option value="2">Option 2</option>
                                                    <option value="3">Option 3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <a className="btn btn-solid" onClick={onClickSearch}>Search</a>
                                    </form>
                                        :
                                        <form className="theme-form">
                                            <div className="form-row">
                                                <div className="col-md-3">
                                                    <label htmlFor="review">소유주</label>
                                                    <input type="password"
                                                           className="form-control"
                                                           id="lname"
                                                           placeholder="Owner's Name"
                                                           required=""
                                                           value={userName}
                                                           onChange={onChangeName}/>
                                                </div>
                                                <div className="col-md-3">
                                                    <label htmlFor="email">차량번호</label>
                                                    <input type="text"
                                                           className="form-control"
                                                           id="fname"
                                                           placeholder="Car Number"
                                                           required=""
                                                           value={carNumber}
                                                           onChange={onChangeNumber} />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col-md-3">
                                                    <label htmlFor="email">차량색상</label>
                                                    <input type="text"
                                                           className="form-control"
                                                           id="fname"
                                                           placeholder="Car Color"
                                                           required=""
                                                           value={carColor}
                                                           onChange={onChangeColor} />
                                                </div>
                                                <div className="col-md-3">
                                                    <label htmlFor="review">희망가격</label>
                                                    <input type="password"
                                                           className="form-control"
                                                           id="lname"
                                                           placeholder="Desired Price"
                                                           required=""
                                                           value={desiredPrice}
                                                           onChange={onChangePrice} />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col-md-3">
                                                    <label htmlFor="email">등록연월</label>
                                                    <input type="text"
                                                           className="form-control"
                                                           id="fname"
                                                           placeholder="Registration YYYYMM"
                                                           required=""
                                                           value={yyyymm}
                                                           onChange={onChangeDate} />
                                                </div>
                                                <div className="col-md-3">
                                                    <label htmlFor="review">주행거리</label>
                                                    <input type="password"
                                                           className="form-control"
                                                           id="lname"
                                                           placeholder="Mileage"
                                                           required=""
                                                           value={mileage}
                                                           onChange={onChangeMileage} />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <textarea className={"form-control"} rows={5}/>
                                            </div>
                                            <br/>
                                            <button href="#" className="btn btn-solid" onClick={onClickSubmit}>Submit</button>
                                        </form>

                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    </>
}
export default SalesForm