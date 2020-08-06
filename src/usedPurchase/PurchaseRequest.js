import React, {useState} from "react";
import SimpleReactValidator from "simple-react-validator";
import {Helmet} from "react-helmet";
import Breadcrumb from "../common/breadcrumb";
import {useSelector} from "react-redux";
import {getCartTotal} from "../atomic/services";

export const PurchaseRequest = props => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [agreement, setAgreement] = useState('')

    const validator = new SimpleReactValidator()

    const onChangeAgreement = e => {
        const obj = {}
        obj[e.target.name] = e.target.checked
        setAgreement(obj)
        if(!validator.fieldValid(e.target.name))
        {
            validator.showMessages()
        }
    }
    const {cartItems, symbol, total} = useSelector(state => ({
        cartItems: state.cartList.cart,
        symbol: state.data.symbol,
        total: getCartTotal(state.cartList.cart)
    }))

    return <>
        <div>

            {/*SEO Support*/}
            <Helmet>
                <title>MultiKart | CheckOut Page</title>
                <meta name="description" content="Multikart – Multipurpose eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Multikart Bootstrap 4 Template will help you run multiple businesses." />
            </Helmet>
            {/*SEO Support End */}

            <Breadcrumb  title={'checkout request'}/>

            <section className="section-b-space">
                <div className="container padding-cls">
                    <div className="checkout-page">
                        <div className="checkout-form">
                            <form>
                                <div className="checkout row">
                                    <div className="col-lg-6 col-sm-12 col-xs-12">
                                        <div className="checkout-title">
                                            <h3>구매 요청</h3>
                                        </div>
                                        <div className="row check-out">
                                            <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                <div className="field-label">Name</div>
                                                <input type="text" name="name" value={name} onChange={ e => setName(e.target.value) } />
                                                {validator.message('name', name, 'required|alpha')}
                                            </div>
                                            <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                <div className="field-label">Phone</div>
                                                <input type="text" name="phone"  value={phone} onChange={ e => setPhone(e.target.value) } />
                                                {validator.message('phone', phone, 'required|phone')}
                                            </div>
                                            <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                <div className="field-label">Email Address</div>
                                                <input type="text" name="email" value={email} onChange={ e => setEmail(e.target.value) } />
                                                {validator.message('email', email, 'required|email')}
                                            </div>
                                            <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                <div className="field-label">Address</div>
                                                <input type="text" name="address" value={address} onChange={ e => setAddress(e.target.value) } placeholder="Street address" />
                                                {validator.message('address', address, 'required|min:20|max:120')}
                                            </div>
                                            <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <input type="checkbox" name="agreement" id="account-option"  checked={agreement} onChange={onChangeAgreement}/>
                                                &ensp; <label htmlFor="account-option">Do you agree to provide personal information to third parties?</label>
                                                {validator.message('checkbox', agreement, 'create_account')}
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
                                                    {cartItems.map((item, index) => {
                                                        return <li key={index}>{item.name}<span>{symbol}{item.price}</span></li> })
                                                    }
                                                </ul>
                                                <ul className="total">
                                                    <li>Total <span className="count">{symbol}{total}</span></li>
                                                </ul>
                                            </div>

                                            <button>구매요청</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
}
export default PurchaseRequest