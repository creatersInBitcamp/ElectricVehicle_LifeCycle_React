import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class MarketPrice extends React.Component {
    state = {
        dataLine: {
            labels: ["1년후", "2년후", "3년후", "4년후", "5년후"],
            datasets: [
                {
                    label: "This car",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(225, 204,230, .3)",
                    borderColor: "rgb(205, 130, 158)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(205, 130,1 58)",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [80, 65, 55, 47, 30, 22, 10]
                }
            ]
        }
    };

    render() {
        return (
            <MDBContainer>
                <Line data={this.state.dataLine} options={{ responsive: true }} />
            </MDBContainer>
        );
    }
}

export default MarketPrice;