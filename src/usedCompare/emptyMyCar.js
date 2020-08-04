import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import Breadcrumb from "../common/breadcrumb";
import {MarketPrice} from "../usedPurchase";
import {removeFromUsedCompare} from "../usedCompare/usedcompareReducer";
import Slider from 'react-slick';
import {CompareList} from "./compareList";

export const emptyMyCar = props => {
    const [item,setItem]=useState(false)
    const {Items, symbol} = useSelector(state=>({
        Items: state.usedcompare.items,
        symbol: state.data.symbol
    }))

    return <>
        <div>
            <Breadcrumb title={'Compare'} />
                {Items.length > 0 ?
                    <div>
                        <div className="compare-part">
                            <button>내차등록하기</button>
                        </div>
                        <CompareList/>
                    </div>
                    :
                    <div>
                        <div className="compare-part">
                            <button>내차등록하기</button>
                        </div>
                        <div className="compare-part">
                            <button>쇼핑하기</button>
                        </div>
                    </div>

                }


        </div>
    </>
}
