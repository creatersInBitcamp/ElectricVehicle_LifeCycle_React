import React from 'react';
import kakao from '../../assets/images/icon/payment_icon_yellow_medium.png'
import {useHistory} from 'react-router-dom'
import queryString from 'query-string'
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

    /* 3. 콜백 함수 정의하기 */
    function callback(response) {
        const { success, error_msg } = response
        if(success) {
            alert('결제성공')
            const query = queryString.stringify(response)
            history.push(`/payment/result?${query}`)
        } else {
            alert(`결제 실패 : ${error_msg}`)
        }
    }

    return (
    <img src={kakao} onClick={onClickPayment}/>
);
}
export default Payment