import React from "react";
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle} from 'mdbreact';

const MyCar = () => {
    return <div>
        <MDBCard style={{ width: "20rem" }}>
            <MDBCardTitle>My Car</MDBCardTitle>
            <MDBCardImage className="img-fluid" src='https://imgauto-phinf.pstatic.net/20200205_218/auto_1580892688565gVui9_PNG/20200205175126_tJ5cbvuq.png?type=f567_410' />
            <MDBCardBody>
                <MDBCardText>
                    2019 테슬라 모델3
                </MDBCardText>
                <MDBBtn>비교하기</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    </div>
}
export default MyCar