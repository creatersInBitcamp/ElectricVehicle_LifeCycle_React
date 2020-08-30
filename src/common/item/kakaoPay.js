const axios = require('axios'); // using 'axios' node module for HTTP request

const KakaoPay = async () => {
// module.exports.payment = async () => { // meaning 'async' is 'asynchronous function'

    // set variables
    const item_name = '초코파이';
    const quantity = 1;
    const total_amount = 2200;
    const vat_amount = 200;
    const tax_free_amount = 0;

    const approval_url = 'http://localhost:3000/success';
    const fail_url = 'http://localhost:3000/fail';
    const cancel_url = 'http://localhost:3000/cancel';

    // set data
    const data = [
        'cid=TC0ONETIME',
        'partner_order_id=partner_order_id',
        'partner_user_id=partner_user_id',
        `item_name=${item_name}`,
        `quantity=${quantity}`,
        `total_amount=${total_amount}`,
        `vat_amount=${vat_amount}`,
        `tax_free_amount=${tax_free_amount}`,
        `approval_url=${approval_url}`,
        `fail_url=${fail_url}`,
        `cancel_url=${cancel_url}`
    ].join('&'); // encode data (application/x-www-form-urlencoded)

    // send request (kakao payment)
    const req = await axios.post('https://kapi.kakao.com/v1/payment/ready', data, {
        headers: {
            'Authorization': 'KakaoAK 1e5be5d5088ae90530133cd882d3aa2f', // 'xxx...' = admin key
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const pc_url = req.data.next_redirect_pc_url; // get pc url

    const response = {
        statusCode: 301, // redirect
        headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
            Location: pc_url
        },
        body: ''
    };

    return response;
};
export default KakaoPay