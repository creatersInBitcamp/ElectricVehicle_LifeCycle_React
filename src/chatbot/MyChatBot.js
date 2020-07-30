import React, { Component } from 'react';
import axios from  'axios';
import ChatBot,{ Loding } from 'react-simple-chatbot';



class CarSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carSearch: '',
            result: [],

        };
    }

    componentWillMount() {
        const { steps } = this.props;
        this.state.carSearch = steps.carSearch.value;

        axios.get('http://localhost:8080/car/carSearch/'+ this.state.carSearch)
            .then( response => {
                console.log(response.data)
                response.data.forEach(item => {this.state.result.push({
                    carName: item.carName,
                    price: item.price,
                    employee: item.employee,
                    img: item.img
                })})
                console.log(this.state.result)
            } ) // SUCCESS
            .catch( response => { console.log(response); } ); // ERROR
    }

    render() {
        const {result} = this.state
        return ((this.state.result.length !== 0)?
                <div>
                    {result.map((item,index) =>{
                        return(
                            <div key={index}>
                                <img src={item.img}/>
                                <h3>{item.carName}</h3>
                                <p>{item.employee}</p>
                                <h4>가격: {item.price}</h4>
                            </div>
                        )
                    })}
                </div>: <p>정보가 없습니다.</p>

        )
    }
}

class FareSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading : true,
            startName: '',
            arriveName: '',
            result: [],

        };
    }

    componentWillMount() {
        const { steps } = this.props;
        this.state.startName = steps.startName.value;
        this.state.arriveName = steps.arriveName.value;
        axios.get('http://localhost:5000/fare/search/'+ this.state.startName+"/"+this.state.arriveName)
            .then( response => {
                response.data.forEach(item => {this.state.result.push({
                    startName: item.startName,
                    arriveName: item.arriveName,
                    typeOne: item.typeOne,
                    typeTwo: item.typeTwo,
                    typeThree: item.typeThree,
                    typeFour: item.typeFour,
                    typeFive: item.typeFive,
                    typeLightCar: item.typeLightCar
                })})
            } ) // SUCCESS
            .catch( response => { console.log(response); } ); // ERROR
    }

    render() {
        return ((this.state.result.length !== 0)?
                <div>
                    {this.state.result.map((item,index) =>{
                        return<div key={index} style={{textAlign: 'center', marginTop: 20}}>
                            <p>출발지: {item.startName} ==> 도착지: {item.arriveName} </p>
                            <p>1종: {item.typeOne}</p>
                            <p>2종: {item.typeTwo}</p>
                            <p>3종: {item.typeThree}</p>
                            <p>4종: {item.typeFour}</p>
                            <p>5종: {item.typeFive}</p>
                            <p>경차: {item.typeLightCar}</p>
                        </div>
                    })}
                </div>:<p>정보가 없습니다.</p>

        );
    }
}

const MyChatBot = () => (
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
                    //차량정보 보기
                    { value: 1, label: '차량정보 보기', trigger: 'car' },
                    //고속도로 비용
                    { value: 2, label: '고속도로 비용', trigger: 'fare' },
                ],
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
        ]}
    />
);

export default MyChatBot;