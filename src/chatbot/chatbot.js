import React from 'react';
import ChatBot from 'react-simple-chatbot';
import {CarSearch, FareSearch} from './Search'
import { ThemeProvider } from 'styled-components';
import ElecCarSearch from "./Search/eleccarSearch";

// all available props
const theme = {
    background: '#f5f8ed',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#558b2f',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#558b2f',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};

const MyChatBot = () => (
    <ThemeProvider theme={theme}>
        <ChatBot
            floating = {true}
            headerTitle = {'서비스'}
            enableSmoothScroll = {true}
            steps={[
                //서비스선택
                {
                    id: '1',
                    message: '원하시는 서비스를 선택해주세요.',
                    trigger: '2',
                },
                {
                    id: '2',
                    options: [
                        //전기차 정보 보기
                        { value: 1, label: '전기차 정보 보기', trigger: 'eccar' },
                        //고속도로 비용
                        { value: 2, label: '고속도로 비용', trigger: 'fare' },
                        //일반차량 정보 보기
                        { value: 3, label: '차량정보 보기', trigger: 'car' },
                    ],
                },
                {
                    id: 'eccar',
                    message: '자동차 또는 제조사 이름을 입력하세요',
                    trigger: 'eleccarSearch',
                },
                {
                    id: 'eleccarSearch',
                    user: true,
                    trigger: 'eleccarSearchResult',
                },
                {
                    id: 'eleccarSearchResult',
                    component: <ElecCarSearch/>,
                    trigger: '1',
                },
                {
                    id: 'fare',
                    message: '출발지를 입력해주세요.',
                    trigger: 'startName',
                },
                {
                    id: 'startName',
                    user: true,
                    trigger: 'fare1',
                },
                {
                    id: 'fare1',
                    message: '도착지를 입력해주세요.',
                    trigger: 'arriveName'
                },
                {
                    id: 'arriveName',
                    user: true,
                    trigger: 'fareResult',
                },
                {
                    id: 'fareResult',
                    component: <FareSearch/>,
                    trigger: '1',
                },
                {
                    id: 'car',
                    message: '자동차 또는 제조사 이름을 입력하세요',
                    trigger: 'carSearch',
                },
                {
                    id: 'carSearch',
                    user: true,
                    trigger: 'carSearchResult',
                },
                {
                    id: 'carSearchResult',
                    component: <CarSearch/>,
                    trigger: '1',
                },
            ]}
        />
    </ThemeProvider>

);

export default MyChatBot;