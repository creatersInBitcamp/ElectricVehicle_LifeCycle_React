import React, {useCallback, useEffect, useRef, useState} from 'react'
import myData from '../data/data-charging-station';
import 'react-table/react-table.css';
import ReactTable from "react-table";
import {useSelector} from "react-redux";
import MaterialTable from 'material-table';
import Modal from "react-responsive-modal";
import {GoogleMap,Marker, useLoadScript} from "@react-google-maps/api";

const MAP_KEY = 'AIzaSyDgxaAVu6wZkfdefa5F1tDC6bVGXvLTqg0';

const libraries = ["places"];

const mapContainerStyle = {
    width: "900px",
    height: "500px",
};
const options = {
    zoomControl: true,
};

function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const TableChargingStation = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: MAP_KEY,
        libraries,
        region:'kr'
    });
    const [searchInput, setSearchInput] = useState("")
    const [data,setData] = useState(myData)
    const [open,setOpen] = useState(false)
    const [position,setPosition] = useState({})
    const [info,setInfo] = useState({})
    const [selectedRow, setSelectedRow] = useState(null);

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    const columns=[]
    for (var key in myData[0]) {
        if(key === 'charger_type'){
            columns.push(
                {
                    title: <b>{Capitalize(key.toString())}</b>,
                    field: key,
                    defaultGroupOrder: 0
                });
        }
        else if ((key === 'unit_name') || (key === 'address')
            || (key === 'business_hours') || (key === 'charger_state')|| (key === 'address'))
        {
            columns.push(
                {
                    title: <b>{Capitalize(key.toString())}</b>,
                    field: key
                });
        }
    }
    const setting = (rowData) => {
        // alert(JSON.stringify(rowData))
        setPosition({lat:rowData.x_value,lng:rowData.y_value})
        setInfo(rowData)
        setOpen(true)
    }
    const handleChange = event => {
        setSearchInput(event.target.value)
        let filteredData = myData.filter(value => {
            return (
                value.unit_name.toLowerCase().includes(event.target.value.toLowerCase()) ||
                value.charger_type.toLowerCase().includes(event.target.value.toLowerCase()) ||
                value.charger_state.toLowerCase().includes(event.target.value.toLowerCase()) ||
                value.address.toLowerCase().includes(event.target.value.toLowerCase()) ||
                value.business_hours.toLowerCase().includes(event.target.value.toLowerCase())

            );
        });
        setData(filteredData );
    };

    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";

    function test(){
        alert('와이라노')
    }

    return (
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <div id="batchDelete" className="transactions">
                                        <MaterialTable
                                            title="충전소 찾기"
                                            columns={columns}
                                            data={data}
                                            options={
                                                {
                                                    search:true,
                                                    pageSize:10,
                                                    columnsButton:true,
                                                    maxBodyHeight: 700,
                                                    grouping: true,
                                                    rowStyle: rowData => ({
                                                        // height:"20px",
                                                        backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'
                                                    }),
                                                    /*headerStyle: {
                                                        backgroundColor: '#9bba19',
                                                        color: '#FFF'
                                                    },
                                                    exportButton:true,
                                                    filtering:true*/
                                                }
                                            }
                                            detailPanel={rowData => {
                                                return (
                                                    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                                                        <div>
                                                            <div className="modal-body">
                                                                <div>
                                                                    <GoogleMap
                                                                        id="map"
                                                                        mapContainerStyle={mapContainerStyle}
                                                                        zoom={14}
                                                                        center={{lat:rowData.x_value,lng:rowData.y_value}}
                                                                        options={options}
                                                                        onLoad={onMapLoad}
                                                                    >
                                                                        <Marker
                                                                            position={{lat:rowData.x_value,lng:rowData.y_value}}
                                                                            icon={
                                                                                {
                                                                                    url: "https://image.flaticon.com/icons/svg/2489/2489241.svg",
                                                                                    scaledSize: new window.google.maps.Size(40, 40)
                                                                                }
                                                                            }
                                                                        />
                                                                    </GoogleMap>
                                                                </div>
                                                                <div>
                                                                    <br/>
                                                                    <h3>이름 : {rowData.unit_name}</h3>
                                                                    <h3>주소 : {rowData.address}</h3>
                                                                    <h3>충전기 타입 : {rowData.charger_type}</h3>
                                                                    <h3>충전기 상태 : {rowData.charger_state}</h3>
                                                                    <h3>이용 시간 : {rowData.business_hours}</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }}
                                            onRowClick={(evt, selectedRow,togglePanel) => togglePanel()}
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
