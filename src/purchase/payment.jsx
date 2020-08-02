import React, { useState} from 'react';
import {Helmet} from 'react-helmet'
import {connect, useSelector} from 'react-redux'
import {Link, Redirect } from 'react-router-dom'
import PaypalExpressBtn from 'react-paypal-express-checkout';
import SimpleReactValidator from 'simple-react-validator';

import Breadcrumb from "../common/breadcrumb";
import {toast} from "react-toastify";
// import {getCartTotal} from "../atomic/services";
// import {removeFromWishlist} from '../atomic/actions'
// import * as types from "../atomic/constants/ActionTypes";

const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST'

const removeFromWishlist = product_id => (dispatch) => {
    toast.error("Item Removed from Wishlist");
    dispatch({
        type: REMOVE_FROM_WISHLIST,
        product_id
    })
};


export const getCartTotal = cartItems => {
    var total = 0;
    for(var i=0; i<cartItems.length; i++){
        total += parseInt(cartItems[i].qty, 10)*parseInt((cartItems[i].price*cartItems[i].discount/100), 10);
    }
    return total;
}

const Payment = () => {
    const [payment,setpayment] = useState('stripe')
    const [first_name,setfirst_name] = useState('')
    const [last_name,setlast_name] = useState('')
    const [phone,setphone] = useState('')
    const [email,setemail] = useState('')
    const [country,setcountry] = useState('')
    const [address,setaddress] = useState('')
    const [city,setcity] = useState('')
    const [state,setstate] = useState('')
    const [pincode,setpincode] = useState('')
    const [create_account,setcreate_account] = useState('')
    const [obj,setobj] = useState({})
    const cartItems = useSelector(state => state.cartList.cart)
    const symbol = useSelector(state => state.data.symbol)
    const total = useSelector(state => getCartTotal(state.cartList.cart))


    const setStateFromInput = (event) => {
        var obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);

      }

     // const setStateFromCheckbox = (event) => {
     //      var obj = {};
     //      obj[event.target.name] = event.target.checked;
     //      setobj(obj);
     //      if(!this.validator.fieldValid(event.target.name))
     //      {
     //          this.validator.showMessages();
     //      }
     //    }

    const checkhandle = (value) => {
        setpayment(value)
    }

    const StripeClick = (props) => {

        if (this.validator.allValid()) {
            alert('You submitted the form and stuff!');

            var handler = (window).StripeCheckout.configure({
                key: 'pk_test_glxk17KhP7poKIawsaSgKtsL',
                locale: 'auto',
                token: (token) => {
                    console.log(token)
                      props.history.push({
                          pathname: '/order-success',
                              state: { payment: token, items: cartItems, orderTotal: total, symbol: symbol }
                      })
                }
              });
              handler.open({
                name: 'Multikart',
                description: 'Online Fashion Store',
                amount: this.amount * 100
              })
        } else {
          this.validator.showMessages();
          // rerender to show messages for the first time
          this.forceUpdate();
        }
    }

        // const {cartItems, symbol, total} = this.props;

        // Paypal Integration
        const onSuccess = (payment) => {
            console.log("The payment was succeeded!", payment);
            this.props.history.push({
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


        return (
            <div>

                {/*SEO Support*/}
                <Helmet>
                    <title>MultiKart | CheckOut Page</title>
                    <meta name="description" content="Multikart – Multipurpose eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Multikart Bootstrap 4 Template will help you run multiple businesses." />
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
                                                <div>
                                                    <div className="field-label">성 (영문)</div>
                                                    <input type="text" name="first_name" value={first_name}/>
                                                    <div className="field-label">이름 (영문)</div>
                                                    <input type="text" name="last_name" value={last_name}/><br/>
                                                    <div className="field-label">전화번호</div>
                                                    <input type="text" name="phone"  value={phone}/>
                                                    <div className="field-label">이메일 주소</div>
                                                    <input type="text" name="email" value={email}/>
                                                    <div className="field-label">주소</div>
                                                    <input type="text" name="address" value={address} onChange={setStateFromInput} placeholder="Street address" />
                                                </div>
                                                    <td><input type="checkbox" name="chk_info" value="HTML"/>수집.이용 및 국내외 사업자에 대한 개인정보 제공에 동의합니다</td><br/>
                                                    <td><input type="checkbox" name="chk_info" value="HTML"/>전기차의 자동차구매계약 상세조건 및 수퍼차저 공정 이용 정책에 동의합니다</td><br/>
                                                    <td><input type="checkbox" name="chk_info" value="HTML"/>전기차의 위치기반서비스 약관에 동의합니다</td><br/>
                                                    {/*<input type="checkbox" name="create_account" id="account-option"  checked={create_account} />*/}
                                                    {/*&ensp; <label htmlFor="account-option">수집.이용 및 국내외 사업자에 대한 개인정보 제공에 동의합니다</label>*/}
                                                    {/*<input type="checkbox" name="create_account" id="account-option"  checked={create_account}/>*/}
                                                    {/*&ensp; <label htmlFor="account-option">전기차의 자동차구매계약 상세조건 및 수퍼차저 공정 이용 정책에 동의합니다</label>*/}
                                                    {/*<input type="checkbox" name="create_account" id="account-option"  checked={create_account} />*/}
                                                    {/*&ensp; <label htmlFor="account-option">전기차의 위치기반서비스 약관에 동의합니다</label>*/}
                                            </div>
                                            <div className="row check-out">
                                                {/*<div className="form-group col-md-6 col-sm-6 col-xs-12">*/}
                                                {/*    <div className="field-label">성 (영문)</div>*/}
                                                {/*    <input type="text" name="first_name" value={first_name} onChange={setStateFromInput} />*/}
                                                {/*    /!*{this.validator.message('first_name', first_name, 'required|alpha')}*!/*/}
                                                {/*</div>*/}

                                                {/*<div className="form-group col-md-6 col-sm-6 col-xs-12">*/}
                                                {/*    <div className="field-label">이름 (영문)</div>*/}
                                                {/*    <input type="text" name="last_name" value={last_name} onChange={setStateFromInput} />*/}
                                                {/*    /!*{this.validator.message('last_name', last_name, 'required|alpha')}*!/*/}
                                                {/*</div>*/}
                                                {/*<div className="form-group col-md-6 col-sm-6 col-xs-12">*/}
                                                {/*    <div className="field-label">전화번호</div>*/}
                                                {/*    <input type="text" name="phone"  value={phone} onChange={setStateFromInput} />*/}
                                                {/*    /!*{this.validator.message('phone', phone, 'required|phone')}*!/*/}
                                                {/*</div>*/}
                                                {/*<div className="form-group col-md-6 col-sm-6 col-xs-12">*/}
                                                {/*    <div className="field-label">이메일 주소</div>*/}
                                                {/*    <input type="text" name="email" value={email} onChange={setStateFromInput} />*/}
                                                {/*    /!*{this.validator.message('email', email, 'required|email')}*!/*/}
                                                {/*</div>*/}
                                                {/*<div className="form-group col-md-12 col-sm-12 col-xs-12">*/}
                                                {/*    <div className="field-label">나라 (국적)</div>*/}
                                                {/*    <select name="country" value={this.state.country} onChange={this.setStateFromInput}>*/}
                                                {/*        <option>India</option>*/}
                                                {/*        <option>South Africa</option>*/}
                                                {/*        <option>United State</option>*/}
                                                {/*        <option>Australia</option>*/}
                                                {/*    </select>*/}
                                                {/*    {this.validator.message('country', this.state.country, 'required')}*/}
                                                {/*</div>*/}
                                                {/*<div className="form-group col-md-12 col-sm-12 col-xs-12">*/}
                                                {/*    <div className="field-label">주소</div>*/}
                                                {/*    <input type="text" name="address" value={address} onChange={setStateFromInput} placeholder="Street address" />*/}
                                                {/*    /!*{this.validator.message('address', address, 'required|min:20|max:120')}*!/*/}
                                                {/*</div>*/}
                                                {/*<div className="form-group col-md-12 col-sm-12 col-xs-12">*/}
                                                {/*    <div className="field-label">Town/City</div>*/}
                                                {/*    <input type="text" name="city" value={this.state.city} onChange={this.setStateFromInput} />*/}
                                                {/*    {this.validator.message('city', this.state.city, 'required|alpha')}*/}
                                                {/*</div>*/}
                                                {/*<div className="form-group col-md-12 col-sm-6 col-xs-12">*/}
                                                {/*    <div className="field-label">State / County</div>*/}
                                                {/*    <input type="text" name="state" value={this.state.state} onChange={this.setStateFromInput} />*/}
                                                {/*    {this.validator.message('state', this.state.state, 'required|alpha')}*/}
                                                {/*</div>*/}
                                                {/*<div className="form-group col-md-12 col-sm-6 col-xs-12">*/}
                                                {/*    <div className="field-label">Postal Code</div>*/}
                                                {/*    <input type="text" name="pincode" value={this.state.spincode} onChange={this.setStateFromInput} />*/}
                                                {/*    {this.validator.message('pincode', this.state.pincode, 'required|integer')}*/}
                                                {/*</div>*/}
                                                {/*<div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">*/}
                                                {/*    <input type="checkbox" name="create_account" id="account-option"  checked={create_account} onChange={setStateFromCheckbox}/>*/}
                                                {/*    &ensp; <label htmlFor="account-option">수집.이용 및 국내외 사업자에 대한 개인정보 제공에 동의합니다</label>*/}
                                                {/*    /!*{this.validator.message('checkbox', create_account, 'create_account')}*!/*/}
                                                {/*</div>*/}
                                                {/*<div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">*/}
                                                {/*    <input type="checkbox" name="create_account" id="account-option"  checked={create_account} onChange={setStateFromCheckbox}/>*/}
                                                {/*    &ensp; <label htmlFor="account-option">전기차의 자동차구매계약 상세조건 및 수퍼차저 공정 이용 정책에 동의합니다</label>*/}
                                                {/*    /!*{this.validator.message('checkbox', create_account, 'create_account')}*!/*/}
                                                {/*</div>*/}
                                                {/*<div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">*/}
                                                {/*    <input type="checkbox" name="create_account" id="account-option"  checked={create_account} onChange={setStateFromCheckbox}/>*/}
                                                {/*    &ensp; <label htmlFor="account-option">전기차의 위치기반서비스 약관에 동의합니다</label>*/}
                                                {/*    /!*{this.validator.message('checkbox', create_account, 'create_account')}*!/*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12 col-xs-12">
                                            <div className="checkout-details">
                                                <div className="order-box">
                                                    <div className="title-box">
                                                        <div>Product <span> Total</span></div>
                                                    </div>
                                                    <ul className="qty">
                                                        {cartItems.map((item, index) => {
                                                            return <li key={index}>{item.name} × {item.qty} <span>{symbol} {item.sum}</span></li> })
                                                        }
                                                    </ul>
                                                    <ul className="sub-total">
                                                        <li>Subtotal <span className="count">{symbol}{total}</span></li>
                                                        <li>Shipping <div className="shipping">
                                                            <div className="shopping-option">
                                                                <input type="checkbox" name="free-shipping" id="free-shipping" />
                                                                    <label htmlFor="free-shipping">Free Shipping</label>
                                                            </div>
                                                            <div className="shopping-option">
                                                                <input type="checkbox" name="local-pickup" id="local-pickup" />
                                                                    <label htmlFor="local-pickup">Local Pickup</label>
                                                            </div>
                                                        </div>
                                                        </li>
                                                    </ul>

                                                    <ul className="total">
                                                        <li>Total <span className="count">{symbol}{total}</span></li>
                                                    </ul>
                                                </div>

                                                <div className="payment-box">
                                                    <div className="upper-box">
                                                        <div className="payment-options">
                                                            <ul>
                                                                <li>
                                                                    <div className="radio-option stripe">
                                                                        <input type="radio" name="payment-group" id="payment-2" defaultChecked={true} onClick={() => checkhandle('stripe')} />
                                                                        <label htmlFor="payment-2">Stripe</label>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="radio-option paypal">
                                                                        <input type="radio" name="payment-group" id="payment-1" onClick={() => checkhandle('paypal')} />
                                                                            <label htmlFor="payment-1">PayPal<span className="image"><img src={`${process.env.PUBLIC_URL}/assets/images/paypal.png`} alt=""/></span></label>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {(total !== 0)?
                                                    <div className="text-right">
                                                        {(payment === 'stripe')? <button type="button" className="btn-solid btn" onClick={() => StripeClick()} >Place Order</button>:
                                                         <PaypalExpressBtn env={'sandbox'} client={client} currency={'USD'} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />}
                                                    </div>
                                                    : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row section-t-space">
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
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
}


// const mapStateToProps = (state) => ({
//     cartItems: state.cartList.cart,
//     symbol: state.data.symbol,
//     total: getCartTotal(state.cartList.cart)
// })

// export default connect(
//     mapStateToProps,
//     {removeFromWishlist}
// )(Payment)
export default Payment