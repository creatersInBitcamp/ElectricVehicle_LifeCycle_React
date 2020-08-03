import React from "react";
import {Link} from 'react-router-dom'
import {MyCarComparison} from "../usedCompare";

const MyCar = () => {
    return <div>
        <div className="collection-filter-block">
            <h3>My Car</h3>
            <img className="img-fluid"
                 src="https://imgauto-phinf.pstatic.net/20200205_218/auto_1580892688565gVui9_PNG/20200205175126_tJ5cbvuq.png?type=f567_410" alt=""/>
            <h3>2019 테슬라 모델3</h3>
            <br/>
            <a href={'/used-car/comparison'}>비교하기</a>
        </div>
    </div>
}
export default MyCar