import React from 'react';
import kakao from '../../assets/images/icon/payment_icon_yellow_medium.png'

function Payment({data}) {
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
        const {
            success,
            merchant_uid,
            error_msg,
        } = response;

        if (success) {
            alert('결제 성공');
        } else {
            alert(`결제 실패: ${error_msg}`);
        }
    }

    return (
    <img src={kakao} onClick={onClickPayment}/>
);
}
export default Payment