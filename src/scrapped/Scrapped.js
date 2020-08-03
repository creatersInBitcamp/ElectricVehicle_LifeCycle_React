import React from "react";
import ChatBot from 'react-simple-chatbot'
import {ThemeProvider} from "styled-components";
import Breadcrumb from "../common/breadcrumb";

const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#bfe6fa',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#bfe6fa',
    botFontColor: '#000000',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
}


const Scrapped = () => {
    return <>
        <div>
            <Breadcrumb title={'Scrapping a Car'}/>
            <section className="register-page section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>전기차 폐차 안내</h3>
                            <div className="theme-card">
                                <ThemeProvider theme={theme}>
                                    <ChatBot
                                        hideBotAvatar = {true}
                                        hideHeader = {true}
                                        hideSubmitButton = {true}
                                        placeholder = {''}
                                        width = {'100%'}
                                        steps={[
                                            {
                                                id: 'q1',
                                                message: '의무사용기간(2년)이 지났나요?',
                                                trigger: 'options',
                                            },
                                            {
                                                id: 'options',
                                                options: [
                                                    { value: 1, label: '네', trigger: 'a1' },
                                                    { value: 2, label: '아니오', trigger: 'q2' }
                                                ],
                                            },
                                            {
                                                id: 'q2',
                                                message: '교통사고나 천재지변 등의 이유로 폐차를 하시나요?',
                                                trigger: 'options2',
                                            },
                                            {
                                                id: 'options2',
                                                options: [
                                                    { value: 1, label: '네', trigger: 'a2' },
                                                    { value: 2, label: '아니오', trigger: 'a3' }
                                                ],
                                            },
                                            {
                                                id: 'a1',
                                                component:
                                                    <div>
                                                        폐차 시 폐배터리를 지자체에 반납해야 합니다.
                                                        해당 지역 내&nbsp;
                                                        <a href={'http://kadra.or.kr/kadra/contents/sub01/01_01.html?srhCate=12'}>
                                                            관허폐차장
                                                        </a>
                                                        에 폐차신청 후
                                                        전기차 배터리 반납 후 일반차량과 동일하게 차량등록말소가 진행되며,
                                                        해당 과정은 폐차장에서 행정처리를 담당합니다. 폐차장에서 폐배터리 분리비용으로 수수료가 발생합니다.
                                                        <br/><br/>
                                                        <a href={'public/assets/file/[서식 1] 전기차동차 배터리 반납신청서.hwp'}
                                                           download>전기자동차 배터리 반납신청서 다운로드</a>
                                                    </div>,

                                            },
                                            {
                                                id: 'a2',
                                                component:
                                                    <div>
                                                        보조금을 반환하지 않아도 됩니다.
                                                        다만, 폐차시 보험사 등으로부터 보상받은 금액이 최초 구매 당시 자부담금을 초과하는 경우에는
                                                        차액을 환수 조치하되, 운행기간에 따라 표에 해당하는 금액을 초과하여 환수할 수 없습니다.
                                                        폐차승인서와 교통사고 사실확인서 등 지역에서 지정한 서류를 준비해 각 시/도청에 폐차 승인 요청 후 검토를 받아야 합니다.
                                                        <br/>
                                                        <img src={'https://imagazinekorea.com/upload/Editor/motor1_20180913_02(0).jpg'}/>
                                                    </div>,
                                                end: true,
                                            },
                                            {
                                                id: 'a3',
                                                component:
                                                    <div>
                                                        원칙적으로 보조금(국비+지방비)을 전액 또는 운행기간별 환수율에 따라 보조금을 반환해야 합니다.
                                                        다만, 폐차시 보험사 등으로부터 보상받은 금액이 최초 구매 당시 자부담금을 초과하는 경우에는
                                                        차액을 환수 조치하되, 운행기간에 따라 표에 해당하는 금액을 초과하여 환수할 수 없습니다.
                                                        폐차승인서와 교통사고 사실확인서 등 지역에서 지정한 서류를 준비해 각 시/도청에 폐차 승인 요청 후 검토를 받아야 합니다.
                                                        <br/>
                                                        <img src={'https://imagazinekorea.com/upload/Editor/motor1_20180913_02(0).jpg'}/>
                                                    </div>,
                                                end: true,
                                            },
                                        ]}
                                    />
                                </ThemeProvider>
                                <br/>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </>
}
export default Scrapped