import React, {useEffect, useState} from "react";
import axios from "axios";
import {AWS_PATH} from '../../api/key'

const CarSearch = (props) => {

    const [searchWord, setSearchWord] = useState('')
    const [result, setresult] = useState([])

    useEffect(()=>{
        const { steps } = props;
        setSearchWord(steps.carSearch.value)
        axios.get(`${AWS_PATH}/cars/carSearch/${searchWord}`)
            .then( response => {
                setresult(response.data)
            } ) // SUCCESS
            .catch( response => { console.log(response); } );
    },[searchWord])

    return ((result.length !== 0)?
            <div>
                {result.map((item,index) =>{
                    return(
                        <div key={index}>
                            <h3>{item.carName}</h3>
                            <p>{item.employee}</p>
                            <h4>가격: {item.price}</h4>
                        </div>
                    )
                })}
            </div>: <p>정보가 없습니다.</p>

    )
}
export default CarSearch