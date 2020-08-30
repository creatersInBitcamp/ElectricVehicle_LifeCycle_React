import React from "react";
import {useSelector} from "react-redux";
import { Scatter } from "react-chartjs-2";

export const MarketPrice = ({product,sales}) => {
    const {Items} = useSelector((state)=>({
        Items: state.usedData.products.filter(x => {
            let carMatch;
            if (x.carName === product.carName)
                carMatch = true;
            else if (x.carName === product)
                carMatch = true;
            return carMatch;
            }
        )
    }))

    const setThisData = () => {
        let box = []
        if (sales) return box
        if (product.age !== null) {
            box.push({x: (product.age).replace("/","").replace("식","") , y: product.price})
        }
        return box
    }

    const box = []
    const setChartData = () => {
        Items.map((item) => {
            if (item.age !== null) {
                box.push({x: (item.age).replace("/","").replace("식","") , y: item.price})
            }
        })
        const idx = box.findIndex(()=>setThisData())
        box.splice(idx,1)
        return box
    }

    const state = {
        type: 'scatter',
        data: {
            datasets: [
                {
                    label: 'products',
                    backgroundColor: "rgba(123,129,175,0.2)",
                    borderColor: "rgb(94,100,151)",
                    data: setChartData(),
                    pointRadius: 5
                },
                {
                    label: 'this product',
                    backgroundColor: "rgb(255,116,116)",
                    borderColor: "rgb(113,49,49)",
                    data: setThisData(),
                    pointRadius: 5
                }
            ]
        },
        options: {
            responsive : true,
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