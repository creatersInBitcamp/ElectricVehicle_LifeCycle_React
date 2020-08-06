import React, {useEffect, useState} from 'react'
import myData from './data/data-charging-station';
import 'react-table/react-table.css';
import ReactTable from "react-table";
import {useSelector} from "react-redux";


function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const TableChargingStation = () => {
    const [searchInput, setSearchInput] = useState("")
    const [data,setData] = useState(myData)

    const columns=[]
    for (var key in myData[0]) {
        if ((key === 'unit_name') || (key === 'charger_type') || (key === 'address')
            || (key === 'business_hours') || (key === 'charger_state')|| (key === 'address'))
        {
            columns.push(
                {
                    Header: <b>{Capitalize(key.toString())}</b>,
                    accessor: key,
                    style: {
                        textAlign: 'center'
                    }
                });
        }
    }

    const handleChange = event => {
        setSearchInput(event.target.value)
        // globalSearch();
    };

    function globalSearch() {
        let filteredData = myData.filter(value => {
            return (
                value.unit_name.toLowerCase().includes(searchInput.toLowerCase()) ||
                value.charger_type.toLowerCase().includes(searchInput.toLowerCase()) ||
                value.charger_state.toLowerCase().includes(searchInput.toLowerCase()) ||
                value.address.toLowerCase().includes(searchInput.toLowerCase()) ||
                value.business_hours.toLowerCase().includes(searchInput.toLowerCase())

            );
        });
        setData( filteredData );
    };

    const kepressChange = event =>{
        if (event.key === 'Enter') {
            globalSearch();
        }
    }
    return (
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>충전소 찾기</h5>
                                </div>
                                <input
                                    size="large"
                                    name="searchInput"
                                    value={searchInput || ""}
                                    onChange={handleChange}
                                    onKeyPress={kepressChange}
                                    placeholder=" 검색어 입력후 enter를 눌러주세요"
                                />
                                <div className="card-body">
                                    <div id="batchDelete" className="transactions">
                                        <ReactTable
                                            data={data}
                                            columns={columns}
                                            defaultPageSize={20}
                                            showPagination={true}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
}

export default TableChargingStation
