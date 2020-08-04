import React, {useEffect, useState} from 'react'
import {Bar} from "react-chartjs-2";

const Chart = () => {
    const [data, setData] = useState    ({})

    const chart = () => {
        setData({
            labels:['서울', '경기', '인천', '제주도', '부산', '여수'],
            datasets:[
                {
                    label:'Local',
                    data:[65,60,80,81,55,54],
                    backgroundColor:'rgb(171,144,144)'
                }
            ]
        })
    }

    useEffect(()=> {
        chart()
    },[])

    return (
        <>
            <h1>chart.js</h1>
            <div style={{"width":"700px"}}>
                <Bar data={data} options={
                    {responsive:true,
                     scales:{
                      yAxes:[{
                          ticks:{
                              beginAtZero:true,
                              fontSize:10,
                              min:-10,
                              max:10
                          }
                      }]
                     }}
                }/>
            </div>
        </>
    )
}
export default Chart