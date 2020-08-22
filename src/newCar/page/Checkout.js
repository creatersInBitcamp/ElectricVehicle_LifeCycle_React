import React, {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory, useRouteMatch} from 'react-router-dom'
import PaypalExpressBtn from 'react-paypal-express-checkout';
import {Breadcrumb} from "../../common";
import {getCartTotal} from "../../atomic/services/services";
import axios from "axios";
import Payment from "../../common/payment/PaymentForm";
import {clearCart} from "./CartReducer";

/* type */
export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST'
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS'
export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE'
const sessionUser = JSON.parse(sessionStorage.getItem('user'))

export const checkout = () => {
    console.log(sessionUser)
    const [method, setMethod] = useState('구매상담')
    const [color, setColor] = useState('색상 선택')
    const [newCar, setNewCar] = useState({
        eccarId: '1',
        carName: '차 이름',
        price: '가격'
    })
    const eccarId = useRouteMatch('/checkout/:eccarId').params.eccarId
    const totalprice = newCar.price*10000

    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(()=>{
        axios.get(`http://localhost:8080/electriccars/getone/${eccarId}`)
            .then((res)=>{
                console.log(res.data)
                setNewCar(res.data)
            })
            .catch((err)=>{
                console.log(err.status)
            })
    }, [eccarId])

    const onPurchaseCar = () => {
        const newPurchase = {
            purchasingMethod: method,
            merchant_uid: '',
            purchaseTime: new Date().toLocaleString(),
            purchasePrice:newCar.price,
            color: color,
            userSeq:sessionUser.userSeq,
            eccarId:newCar.eccarId
        }
        console.log(newPurchase)
        axios.post(`http://localhost:8080/purchases/insert`, newPurchase)
            .then((res)=>{
                alert('구매상담신청 성공')
                dispatch(clearCart())
                history.push('/')

            })
            .catch((err)=>{
                console.log(`신차 구매 axios 실패 : ${err.status}`)
            })
    }

    const checkhandle = (value) => {
        setMethod(value)
    }


    const {cartItems, symbol, total} = useSelector((state) => ({
        cartItems: state.cartList.cart,
        symbol: state.data.symbol,
        total: getCartTotal(state.cartList.cart)
    }));

    // Paypal Integration
    const onSuccess = (payment) => {
        console.log("The payment was succeeded!", payment);
        history.push({
            pathname: '/order-success',
            state: { payment: payment, items: cartItems, orderTotal: total, symbol: symbol }
        })

    }

    const onCancel = (data) => {
        console.log('The payment was cancelled!', data);
    }

    const onError = (err) => {
        console.log("Error!", err);
    }

    const client = {
        sandbox:    'AZ4S98zFa01vym7NVeo_qthZyOnBhtNvQDsjhaZSMH-2_Y9IAJFbSD3HPueErYqN8Sa8WYRbjP7wWtd_',
        production: 'AZ4S98zFa01vym7NVeo_qthZyOnBhtNvQDsjhaZSMH-2_Y9IAJFbSD3HPueErYqN8Sa8WYRbjP7wWtd_',
    }
    const today = new Date()
    today.setDate(today.getDate()+3)
    const purchaseData = {
        pg: 'kakaopay',                           // PG사
        pay_method: 'card',                           // 결제수단
        merchant_uid: `mid_${new Date().getTime()}`,   // 주문번호
        amount: newCar.price,                                 // 결제금액
        name: newCar.carName,                  // 주문명
        buyer_name: sessionUser.name,                           // 구매자 이름
        buyer_tel: sessionUser.phoneNumber,                     // 구매자 전화번호
        buyer_email: sessionUser.email,               // 구매자 이메일
        buyer_addr: sessionUser.addr,                    // 구매자 주소
        buyer_postcode: '06018',                      // 구매자 우편번호
        item: newCar,
        color: color,
        userSeq:sessionUser.userSeq,
        date : new Date().toLocaleString(),
        deliveryDate : today.toLocaleDateString()
    }


    return (
        <div>

            {/*SEO Support*/}
            <Helmet>
                <title>EV | CheckOut Page</title>
                <meta name="description" content="" />
            </Helmet>
            {/*SEO Support End */}

            <Breadcrumb  title={'Checkout'}/>

            <section className="section-b-space">
                <div className="container padding-cls">
                    <div className="checkout-page">
                        <div className="checkout-form">
                            <form>
                                <div className="checkout row">
                                    <div className="col-lg-6 col-sm-12 col-xs-12">
                                        <div className="checkout-title">
                                            <h3>Billing Details</h3>
                                        </div>
                                        <div className="row check-out">
                                            <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                <div className="field-label">주문자</div>
                                                <input type="text" name="first_name" value={sessionUser.name} />
                                                {/*{validator.message('first_name', state.first_name, 'required|alpha')}*/}
                                            </div>
                                            <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                <div className="field-label">주문자 전화번호</div>
                                                <input type="text" name="phone"  value={sessionUser.phoneNumber} />
                                                {/*{validator.message('phone', state.phone, 'required|phone')}*/}
                                            </div>
                                            <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                <div className="field-label">Email Address</div>
                                                <input type="text" name="email" value={sessionUser.email} />
                                                {/*{validator.message('email', state.email, 'required|email')}*/}
                                            </div>
                                            <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                <div className="field-label">Color</div>
                                                <select name="color" value={color} onChange={e => {setColor(e.target.value)}}>
                                                    <option>{color}</option>
                                                    <option>{newCar.color1}</option>
                                                    {newCar.color2?<option>{newCar.color2}</option>:null}
                                                    {newCar.color3?<option>{newCar.color3}</option>:null}
                                                    {newCar.color4?<option>{newCar.color4}</option>:null}
                                                    {newCar.color5?<option>{newCar.color5}</option>:null}
                                                    {newCar.color6?<option>{newCar.color6}</option>:null}
                                                </select>
                                            </div>
                                            <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                <div className="field-label">Address</div>
                                                <input type="text" name="address" value={sessionUser.addr} placeholder="Street address" />
                                                {/*{validator.message('address', state.address, 'required|min:20|max:120')}*/}
                                            </div>
                                            {/*<div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <input type="checkbox" name="create_account" id="account-option" />
                                                &ensp; <label htmlFor="account-option">Create An Account?</label>
                                            </div>*/}
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12 col-xs-12">
                                        <div className="checkout-details">
                                            <div className="order-box">
                                                <div className="title-box">
                                                    <li><img src={newCar.img} className="img-fluid image_zoom_cls-0"/></li>
                                                    <div>Product <span> Price</span></div>
                                                </div>
                                                <ul className="qty">
                                                    <li> {newCar.carName} <span>{totalprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></li>
                                                    {/*{cartItems.map((item, index) => {*/}
                                                    {/*    return <li key={index}>{item.carName} <span>{item.sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{symbol}</span></li> })*/}
                                                    {/*}*/}
                                                </ul>
                                            </div>

                                            <div className="payment-box">
                                                <div className="upper-box">
                                                    <div className="payment-options">
                                                        <ul>
                                                            <li>
                                                                <div className="radio-option stripe">
                                                                    <input type="radio" name="payment-group" id="payment-2" defaultChecked={true} onClick={() => checkhandle('구매상담')} />
                                                                    <label htmlFor="payment-2">구매상담</label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="radio-option stripe">
                                                                    <input type="radio" name="payment-group" id="payment-3" onClick={() => checkhandle('카카오페이')} />
                                                                    <label htmlFor="payment-3">카카오페이</label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="radio-option paypal">
                                                                    <input type="radio" name="payment-group" id="payment-1" onClick={() => checkhandle('페이팔')} />
                                                                    <label htmlFor="payment-1">페이팔<span className="image"><img src={`${process.env.PUBLIC_URL}/assets/images/paypal.png`} alt=""/></span></label>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                    <div className="text-right">
                                                        {(method === '구매상담')?
                                                            <button type="button" className="btn-solid btn" onClick={() => onPurchaseCar()} >Place Order</button>
                                                            :
                                                            (method === '카카오페이')?
                                                                <Payment data={purchaseData}/>
                                                                :
                                                            <PaypalExpressBtn env={'sandbox'} client={client} currency={'USD'} total={total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />}
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*<div className="row section-t-space">
                                    <div className="col-lg-6">
                                        <div className="stripe-section">
                                            <h5>stripe js example</h5>
                                            <div>
                                                <h5 className="checkout_class">dummy test</h5>
                                                <table>
                                                    <tbody>
                                                    <tr>
                                                        <td>cart number</td>
                                                        <td>4242424242424242</td>
                                                    </tr>
                                                    <tr>
                                                        <td>mm/yy</td>
                                                        <td>2/2020</td>
                                                    </tr>
                                                    <tr>
                                                        <td>cvc</td>
                                                        <td>2222</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 m-sm-t-2">
                                        <div className="stripe-section">
                                            <h5>paypal example</h5>
                                            <div>
                                                <h5 className="checkout_class">dummy test</h5>
                                                <table>
                                                    <tbody>
                                                    <tr>
                                                        <td>cart number</td>
                                                        <td>4152521541244</td>
                                                    </tr>
                                                    <tr>
                                                        <td>mm/yy</td>
                                                        <td>11/18</td>
                                                    </tr>
                                                    <tr>
                                                        <td>cvc</td>
                                                        <td>521</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>*/}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default checkout