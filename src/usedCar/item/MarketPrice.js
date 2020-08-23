import React from "react";
import { Scatter } from "react-chartjs-2";
import {useSelector} from "react-redux";

export const MarketPrice = ({product}) => {
    const {Items} = useSelector((state)=>({
        Items: state.usedData.products.filter(x => {
            let carMatch;
            if (x.carName === product.carName)
                carMatch = true;
            return carMatch;
            }
        )
    }))

    const box = []
    const setChartData = () => {
        Items.map((item,index) => {
            box.push({x: item.age ? (item.age)
                    .replace("/","")
                    .replace("식","") : item.age , y: item.price})
        })
        return box
    }

    const state = {
        type: 'scatter',
        data: {
            datasets: [
                {
                    backgroundColor: "rgba(123,129,175,0.2)",
                    borderColor: "rgb(94,100,151)",
                    data: setChartData(),
                    pointRadius: 5
                }
            ]
        },
        options: {
            scales: {
                xAxes: [
                    {
                        type: 'time',
                        time: {
                            parser: 'YY/MM',
                            unit: 'month',
                            displayFormats: {
                                'month': 'YY/MM'
                            }
                        },
                        scaleLabel: {
                            display: true,
                            labelString: '제조년월'
                        },
                        ticks: {
                            reverse: true
                        }

                    }
                ],
                yAxes: [
                    {
                        ticks: {
                            callback: function (value) {
                                if(value > 0){
                                    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                } else {
                                    return value;
                                }
                            }
                        },
                        scaleLabel: {
                            display: true,
                            labelString: '단위: 만원'
                        }
                    }
                ]
            },
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItems) {
                        return tooltipItems.yLabel+'만원'
                    }
                }
            }
        }
    }

    return <>
        <Scatter data={state.data} options={state.options} />
    </>

}