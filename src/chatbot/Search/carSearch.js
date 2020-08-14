import React, {useEffect, useState} from "react";
import axios from "axios";

const CarSearch = (props) => {

    const [carSearch, setCarSearch] = useState('')
    const [result, setresult] = useState([])

    useEffect(()=>{
        const { steps } = props;
        setCarSearch(steps.carSearch.value)
        axios.get('http://localhost:5000/car/carSearch/'+ carSearch)
            .then( response => {
                console.log(response.data)
                response.data.forEach(item => {result.push({
                    carName: item.carName,
                    price: item.price,
                    employee: item.employee,
                    img: item.img
                })})
                console.log(result)
            } ) // SUCCESS
            .catch( response => { console.log(response); } );
    })

    return ((result.length !== 0)?
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
export default CarSearch