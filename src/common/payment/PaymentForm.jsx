import React from 'react';
import kakao from '../../assets/images/icon/payment_icon_yellow_medium.png'
import {useHistory} from 'react-router-dom'
import queryString from 'query-string'
import axios from "axios";
import {clearCart} from "../../newCar/page/CartReducer";
import {useDispatch} from "react-redux";
function Payment({data}) {
    const history = useHistory();
    function onClickPayment(e) {
        e.preventDefault()
        /* 1. 가맹점 식별하기 */
        const { IMP } = window;
        IMP.init('imp07844468');

        /* 4. 결제 창 호출하기 */
        IMP.request_pay(data, callback);
    }
    const dispatch = useDispatch()
    /* 3. 콜백 함수 정의하기 */
    function callback(response) {
        const { success, error_msg } = response
        if(success) {
            alert('결제성공')
            dispatch(clearCart())
            const query = queryString.stringify(response)
            history.push({
                pathname: '/order-success',
                state: { query:query, data:data }
            })
            const newPurchase = {
                purchasingMethod: '구매완료',
                merchant_uid: data.merchant_uid,
                purchaseTime: new Date().toLocaleString(),
                purchasePrice:data.amount,
                color: data.color,
                userSeq:data.userSeq,
                eccarId:data.item.eccarId
            }
            console.log(newPurchase)
            axios.post(`http://localhost:8080/purchases/insert`, newPurchase)
                .then((res)=>{
                    console.log('신차 구매 axios 성공')
                })
                .catch((err)=>{
                    console.log(`신차 구매 axios 실패 : ${err.status}`)
                })
            // history.push(`/payment/result?${query}`)
        } else {
            alert(`결제 실패 : ${error_msg}`)
        }
    }

    return (
    <img src={kakao} onClick={onClickPayment}/>
);
}
export default Payment