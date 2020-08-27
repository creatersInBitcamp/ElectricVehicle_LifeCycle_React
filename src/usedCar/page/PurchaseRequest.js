import React, {useState} from "react";
import {useSelector} from "react-redux";
import axios from "axios";
import {useRouteMatch} from 'react-router-dom';
import {Breadcrumb} from "../../common";
import {AWS_PATH} from '../../api/key'

export const PurchaseRequest = (props) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [agreement, setAgreement] = useState('')
    const [submitted,setSubmitted] = useState(false)

    const match = useRouteMatch('/used-car/purchase/request/:usedCarId')
    const {symbol, item} = useSelector((state)=>{
        let productId = match.params.usedCarId
        return {
            item: state.usedData.products.find(el => el.usedCarId == productId),
            symbol: state.usedData.symbol
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        if(name && phone && email && address && agreement) {
            const info = {
                buyerName: name,
                buyerPhoneNumber: phone,
                buyerEmail: email,
                buyerAddr: address,
                carName: item.carName,
                usedCarId: item.usedCarId
            }
            console.log(info)
            axios.post(`${AWS_PATH}/sales/register`, info)
                .then(res => {
                    res.data ? props.history.push(`${process.env.PUBLIC_URL}/`) : alert('등록 실패')
                })
                .catch(()=>{
                    alert('통신실패')
                })
        }
    }

    return <>
        <Breadcrumb  title={'checkout request'}/>
        {(item)?
            <section className="section-b-space">
                <div className="container padding-cls">
                    <div className="checkout-page">
                        <div className="checkout-form">
                            <form onSubmit={handleSubmit}>
                                <div className="checkout row">
                                    <div className="col-lg-6 col-sm-12 col-xs-12">
                                        <div className="checkout-title">
                                            <h3>구매 요청</h3>
                                        </div>
                                        <div className="row check-out">
                                            <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                <div className="field-label">Name</div>
                                                <input type="text"
                                                       name="name"
                                                       value={name}
                                                       onChange={ (e) => { setName(e.target.value) } } />
                                                {
                                                    submitted && !name &&
                                                    <div style={{color:"red"}}>입력 필수입니다.</div>
                                                }
                                            </div>

                                            <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                <div className="field-label">Phone</div>
                                                <input type="text"
                                                       name="phone"
                                                       value={phone}
                                                       onChange={ (e) => { setPhone(e.target.value) } } />
                                                {
                                                    submitted && !phone &&
                                                    <div style={{color:"red"}}>입력 필수입니다.</div>
                                                }
                                            </div>
                                            <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                <div className="field-label">Email Address</div>
                                                <input type="text"
                                                       name="email"
                                                       value={email}
                                                       onChange={ (e) => { setEmail(e.target.value) } } />
                                                {
                                                    submitted && !email &&
                                                    <div style={{color:"red"}}>입력 필수입니다.</div>
                                                }
                                            </div>
                                            <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                <div className="field-label">Address</div>
                                                <input type="text"
                                                       name="address"
                                                       value={address}
                                                       onChange={ (e) => { setAddress(e.target.value) } }
                                                       placeholder="Street address" />
                                                {
                                                    submitted && !address &&
                                                    <div style={{color:"red"}}>입력 필수입니다.</div>
                                                }
                                            </div>
                                            <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <input type="checkbox"
                                                       name="agreement"
                                                       checked={agreement}
                                                       onChange={(e) => {setAgreement(true)}}/>
                                                &ensp; <label htmlFor="account-option">Do you agree to provide personal information to third parties?</label>
                                                {
                                                    submitted && !agreement &&
                                                    <div style={{color:"red"}}>체크 필수입니다.</div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12 col-xs-12">
                                        <div className="checkout-details">
                                            <div className="order-box">
                                                <div className="title-box">
                                                    <div>Product <span> Price</span></div>
                                                </div>
                                                <ul className="qty">
                                                    <li>{item.carName}<span className="count">{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{symbol}</span></li>
                                                </ul>
                                            </div>
                                            <div className="text-right">
                                                <button type="submit"
                                                        className="btn-solid btn">구매요청</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            :''
        }

    </>
}