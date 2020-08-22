import React from 'react';
import queryString from "query-string";

export const OrderSuccess=({ history })=>{
    const { location } = history;
    const query = queryString.parse(location.state.query);
    // const item = location.state.data.item
    // const deliveryDate = new Date(Date.now() + 5 * 86400000)
    console.log(location.state)
    console.log(query)
    const { merchant_uid, error_msg, buyer_addr, buyer_email, buyer_name, buyer_postcode,buyer_tel, imp_uid } = query;
    const { pg, pay_method, amount, date, deliveryDate, item} = location.state.data;
    const isSuccessed = getIsSuccessed();
    function getIsSuccessed() {
        const { success, imp_success } = query;
        if (typeof imp_success === 'string') return imp_success === 'true';
        if (typeof imp_success === 'boolean') return imp_success === true;
        if (typeof success === 'string') return success === 'true';
        if (typeof success === 'boolean') return success === true;
    }

    const iconType = isSuccessed ? 'check-circle' : 'exclamation-circle';
    const resultType = isSuccessed ? '성공' : '실패';
    const colorType = isSuccessed ? '#52c41a' : '#f5222d';

    return (
        (isSuccessed)?
            <div>
                <section className="section-b-space light-layout">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="success-text">
                                    <i className="fa fa-check-circle" aria-hidden="true"/>
                                    <h2>감사합니다</h2>
                                    <p>{`결제에 ${resultType}하였습니다`}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="product-order">
                                    <h3>your order details</h3>
                                    <div className="col-3">
                                        <img width={600} src={item.variants?
                                            item.variants[0].images
                                            :item.img} alt=""  />
                                    </div>
                                    <br/>
                                    <h3>상품명 : {item.carName}</h3>

                                    <h3>가격 : {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}만원</h3>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row order-success-sec">
                                    <div className="col-sm-6">
                                        <h4>summery</h4>
                                        <ul className="order-detail">
                                            <div>
                                                <li>주문번호: {merchant_uid}</li>
                                                <li>PG사: {pg}</li>
                                                <li>결제수단: {pay_method}</li>
                                            </div>
                                            <li>주문날짜: {date}</li>
                                            <li>결제금액: {amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6">
                                        <h4>배송지 주소</h4>
                                        <ul className="order-detail">
                                            <li> 이름 : {buyer_name}</li>
                                            <li> 전화번호 : {buyer_tel}</li>
                                            <li> 이메일 : {buyer_email}</li>
                                            <li> 주소</li>
                                            <li>{buyer_postcode}</li>
                                            <li>{buyer_addr}</li>
                                        </ul>
                                    </div>

                                    <div className="col-sm-12 payment-mode">
                                        <h4>결제수단</h4>
                                        <p>{pay_method}</p>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="delivery-sec">
                                            <h3>배송 예정 날짜</h3>
                                            <h2>{deliveryDate}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            :
            <section className="p-0">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="error-section">
                                <h1>{`결제에 ${resultType}하였습니다`}</h1>
                                <h2>에러 메시지{error_msg}</h2>
                                <button className="btn btn-solid" onClick={() => history.push('/')}>
                                    돌아가기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default OrderSuccess