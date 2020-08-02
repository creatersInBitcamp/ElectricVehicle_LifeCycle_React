import React, { Component,Fragment } from 'react';
import CanvasJSReact from '../assets/canvas/canvasjs.react';

import { Line } from 'react-chartjs-2';
// import {
//     employeeData,
//     employeeOptions
// } from '../atomic/constants/chartData'
// image impoer
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const employeeData = {
    labels: ["2020년", "2021년", "2022년", "2023년", "2024년", "2025년", "2026년"],
    datasets: [
        {
            lagend: 'none',
            // data: [60, 78, 60, 89, 76, 87, 47],
            data: [100000, 9000, 8000, 7000, 6000, 5000, 4000],
            borderColor: '#ff8084',
            backgroundColor: 'rgba(255, 128, 132, 0.1)',
            fill: 'origin',
        }
    ]
};
const employeeOptions = {
    maintainAspectRatio: false,
    height: 45,
    width: 500,
    animation: false,
    legend: {
        display: false,
    },
}


export const Prices = () => {
        return (
            <Fragment>
                {/*<Breadcrumb title="Dashboard" parent="Dashboard" />*/}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">

                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-xl-3 col-sm-6 xl-50">
                                            <div className="order-graph sm-order-space">
                                            </div>
                                        </div>
                                        <div className="col-xl-6 xl-100">
                                            <div className="order-graph xl-space">
                                                <h6>신차시세예측</h6>
                                                <div className="ct-4 flot-chart-container">
                                                    <Line data={employeeData} options={employeeOptions}  />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>

        )

}

export default Prices
