import React from "react";
import {Table} from "../admin/item";
import {useSelector} from "react-redux";

const MyUsedTrading = ({used}) => {
    const {name} = useSelector((state)=>({
        name: state.usedData.products.find(el => el.usedCarId == used.usedCarId)
    }))
    console.log(name)
    const reqConfirm = () => {
        return <button>요청확인</button>
    }
    const columns = [
        {
            title:'매물번호', field:'usedCarId', editable: 'never'
        },
        {
            title:'품명', field: '', editable: 'never'
        },
        {
            title:'연식', field:'age', editable: 'never'
        },
        {
            title:'주행거리', field:'mileage', editable: 'never'
        },
        {
            title:'가격', field:'price', editable: 'never'
        },
        {
            title:'구매요청', field: 'reqConfirm()', editable: 'never'
        }
    ]
    return (
        <>
            <Table title={null} columns={columns} data={used}/>
        </>
    )
}
export default MyUsedTrading