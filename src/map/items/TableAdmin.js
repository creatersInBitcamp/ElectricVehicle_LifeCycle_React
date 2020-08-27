import React, {useCallback, useEffect, useRef, useState} from 'react'
import 'react-table/react-table.css';
import MaterialTable from 'material-table';
import {GoogleMap,Marker, useLoadScript} from "@react-google-maps/api";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {MAP_KEY, AWS_PATH} from '../../api/key'

const libraries = ["places"];

const mapContainerStyle = {
    width: "900px",
    height: "500px",
};
const options = {
    zoomControl: true,
};

export const AdminChargingStationTable = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: MAP_KEY,
        libraries,
        region:'kr'
    });
    const [selectedRow, setSelectedRow] = useState(null);
    const [myData,setMyData] = useState([])

    const dispatch = useDispatch()
    useEffect(()=>{
        axios.get(`${AWS_PATH}/chargingstations/getall`)
            .then((res)=>{
                setMyData(res.data)
            })
            .catch((err)=>{
                console.log(err.status)
            })
    },[])

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    const columns=[
        { title: '이름', field: 'name' },
        { title: '타입ID', field: 'chargerTypeID' },
        { title: '타입', field: 'chargerType'},
        { title: '상태', field: 'chargerState'},
        { title: '주소', field: 'address'},
        { title: '위도', field: 'xvalue' },
        { title: '경도', field: 'yvalue' },
    ]

    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";

    const editable = {
        onRowAdd: newData =>
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    setMyData([...myData, newData]);
                    resolve();
                    let chargingStation = {
                        name : newData.name,
                        chargerId : "1",
                        chargerTypeID : newData.chargerTypeID,
                        chargerType : newData.chargerType,
                        chargerState : newData.chargerState,
                        address : newData.address,
                        xvalue : newData.xvalue,
                        yvalue : newData.yvalue,
                        businessHours : "24시간 이용가능",
                        agencyName : "환경부",
                        phone : "1661-9408",
                        updateDate : "",
                        boostingCharge : "급속(50kW)",
                        category : "station"
                    }
                    axios.post(`${AWS_PATH}/chargingstations/insert`, chargingStation)
                        .then((res) => {
                            window.location.reload()
                        })
                        .catch(() => {
                            alert("통신실패")
                        })

                }, 1000)

            }),
        onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    const dataUpdate = [...myData]
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData
                    setMyData([...dataUpdate])
                    resolve()
                    axios.post(`${AWS_PATH}/chargingstations/update`, newData)
                        .then((res) => {
                            window.location.reload()
                        })
                        .catch(() => {
                            alert("통신실패")
                        })

                }, 1000)
            }),
        onRowDelete: oldData =>
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    const dataDelete = [...myData];
                    const index = oldData.tableData.id;
                    const chargingStationId = oldData.chargingStationId
                    dataDelete.splice(index, 1);
                    setMyData([...dataDelete]);
                    resolve()
                    axios.get(`${AWS_PATH}/chargingstations/delete/${chargingStationId}`)
                        .then((res) => {
                            window.location.reload()
                        })
                        .catch(() => {
                            alert("통신실패")
                        })

                }, 1000)
            }),
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
                                        data={myData}
                                        options={
                                            {
                                                search:true,
                                                pageSize:5,
                                                maxBodyHeight: 1000,
                                                rowStyle: rowData => ({
                                                    backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'
                                                }),
                                            }
                                        }
                                        editable={editable}
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

export default AdminChargingStationTable
