import React from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PaymentResult({ history }) {
    const { location } = history;
    const query = queryString.parse(location.state.query);

    const { merchant_uid, error_msg, imp_uid } = query;
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
                        <Container>
                            <Row>
                                <Col md={{ span:8, offset:3 }}>
                                    <Row>
                                        <h1>{`결제에 ${resultType}하였습니다`}</h1>
                                    </Row>
                                    <Row>
                                        <h2>주문번호 : </h2><h3> {merchant_uid} </h3>
                                    </Row>
                                    <Row>
                                        {isSuccessed  ? (
                                            <h2>아임포트 번호 : {imp_uid}</h2>
                                        ) : (
                                            <h2>에러 메시지{error_msg}</h2>
                                        )}
                                    </Row>
                                    <Row>
                                        <Col md={{ span:6, offset:3 }}>
                                        <button className="btn btn-google" size="large" onClick={() => history.push('/')}>
                                            돌아가기
                                        </button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>

    );
}

export default withRouter(PaymentResult);