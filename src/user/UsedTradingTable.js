import React from "react";
import {Table} from "../admin/item";

const MyUsedTrading = ({used}) => {
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
        }
    ]
    return (
        <>
            <Table title={null} columns={columns} data={used}/>
        </>
    )
}
export default MyUsedTrading