import React, {useEffect, useState} from 'react';
import axios from "axios";
import MaterialTable from "material-table";

const sessionUser = JSON.parse(sessionStorage.getItem('user'))

const MyOrder = () => {
    const [data, setData] = useState([])
    const products=[]

    const columns=[
        {title:'주문번호', field: 'merchantUid'},
        {title:'차량명', field:'carName'},
        {title:'색상', field:'color'},
        {title:'방식', field:'purchasingMethod'},
        {title:'가격', field:'purchasePrice'},
        {title:'구매날짜', field:'purchaseTime'},
    ]

    useEffect(()=>{

        axios.get(`http://localhost:8080/purchases/getall/${sessionUser.userSeq}`)
            .then((res)=>{
                /*let size = res.data.length
                for(let i=0; i<size; i++){
                    products.push(res.data.shift().place)
                    console.log(products)
                }*/
                // console.log(res.data.shift().place)
                console.log(res.data)
                setData(res.data)
            })
            .catch((err)=>{
                console.log(err.status)
            })
    },[])

    return (
        <>
            <MaterialTable
                title={"주문내역"}
                columns={columns}
                data={data}
            />

        </>
    );
};

export default MyOrder;