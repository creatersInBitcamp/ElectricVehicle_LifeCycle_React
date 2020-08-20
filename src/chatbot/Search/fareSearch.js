import React, {useEffect, useState} from "react";
import axios from "axios";

const FareSearch =(props)=> {
    const[loading, setLoading] = useState(true)
    const[startName, setStartName] = useState('')
    const[arriveName, setArriveName] = useState('')
    const [result, setresult] = useState([])

    useEffect(()=>{
        const { steps } = props;
        setStartName(steps.startName.value)
        setArriveName(steps.arriveName.value)
        axios.get(`http://localhost:8080/fare/search/${startName}/${arriveName}`)
            .then( response => {
                setresult(response.data)
            }) // SUCCESS
            .catch( response => { console.log(response); } ); // ERROR
    },[startName])


return (result.length !== 0)?
        <div>
            {result.map((item,index) =>{
                return<div key={index} style={{textAlign: 'center', marginTop: 20}}>
                    <p>출발지: {item.startName} → 도착지: {item.arriveName} </p>
                    <p>1종: {item.typeOne}</p>
                    <p>2종: {item.typeTwo}</p>
                    <p>3종: {item.typeThree}</p>
                    <p>4종: {item.typeFour}</p>
                    <p>5종: {item.typeFive}</p>
                    <p>경차: {item.typeLightCar}</p>
                </div>
            })}
        </div>:<p>정보가 없습니다.</p>
}
export default FareSearch