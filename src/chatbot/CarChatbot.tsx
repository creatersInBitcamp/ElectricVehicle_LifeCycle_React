import React,{Component} from 'react';
import { ThemeProvider } from 'styled-components';
import Chatbot from 'react-simple-chatbot'
const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#FF8084',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#FF8084',
    botFontColor: '#4a4a4a',
    userBubbleColor: '#FF8084',
    userFontColor: '#4a4a4a',
};

class CarChatbot extends Component<any, any>{
    render() {
        return    <ThemeProvider theme={theme}>
            {/* <ChatBot> => 챗봇이 생성된다.*/}
            <Chatbot
                floating={true}
                // steps 챗봇의 시나리오를 작성한다.
                steps={[
                    {
                        id: '1',
                        message: '이름을 알려주세요.',
                        // trigger는 다음 이동해야 할 시나리오를 가져온다.
                        trigger: 'name',
                    },
                    {
                        id: 'name',
                        // user에 true넣으면 값을 입력 된다.
                        user: true,
                        trigger: '2',
                    },
                    {
                        id: '2',
                        message: '안녕하세요. {previousValue}님, 만나서 반갑습니다.',
                        end: true,
                    },
                ]}
            />
        </ThemeProvider >
    }
};
export default CarChatbot
